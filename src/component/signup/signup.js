import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import validator from 'validator';
import Modal from '../modal/modal';
import userService from '../../services/userService';

class SignUp extends Component {

    state = {
        response: '',
        show: false
    }

    fade = () => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                show: false
            })
        }, 2000)
    }


    valiadate = (email, password) => {

        if (validator.isEmpty(email)) {
            this.setState({
                ...this.state,
                response: 'plese enter email',
                show: true
            })
            this.fade();
            return false
        }

        if (validator.isEmpty(password)) {
            this.setState({
                ...this.state,
                response: 'please enter password',
                show: true
            })
            this.fade();
            return false;
        }

        if (!validator.isEmail(email)) {
            this.setState({
                ...this.state,
                response: 'plese enter valid email',
                show: true
            })
            this.fade();
            return false;

        }

        return true;

    }


    signUp = () => {
        let email = document.getElementById('email').value;
        let password = document.getElementById('pwd').value;
        let confirmpassword = document.getElementById('cpwd').value;

        if (password !== confirmpassword) {
            this.setState({
                ...this.state,
                response: 'please confirm your password again',
                show: true
            })
            this.fade()
        } else {
            if (this.valiadate(email, password)) {
                userService.userSignUp(email,password).
                then(response =>{
                    this.setState({
                        ...this.state,
                        response: response.data,
                        show: true
                        })
                        this.fade()
                })
                .catch(error =>{
                    this.setState({
                        ...this.state,
                        response: error,
                        show: true
                    })
                });
            }
        }
    }

    render() {
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return (
            <div>
            <div className="text-center">
                <NavBar></NavBar>
                {message}
                <h3><b>SignUp To CueBlog</b></h3>
                <form className="well col-md-4 col-md-offset-4 text-left">
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="email" className="form-control" id="email" onChange={this.disMiss}></input>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="pwd" onChange={this.disMiss}></input>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="cpwd" onChange={this.disMiss}></input>
                    </div>

                    <button type="button" className="btn btn-success" onClick={this.signUp}>SignUp</button>
                </form>
            </div>
            </div>
            
        )
    }
}

export default SignUp;