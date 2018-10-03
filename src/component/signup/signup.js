import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import validator from 'validator';

class SignUp extends Component {


    valiadate = (email, password) => {

        if (validator.isEmpty(email)) {
            alert('plese enter email');
            return false
        }

        if (validator.isEmpty(password)) {
            alert('please enter password');
            return false;
        }

        if (!validator.isEmail(email)) {
            alert('plese enter valid email');
            return false;

        }

        return true;

    }


    signUp = () => {
        let email = document.getElementById('email').value;
        let password = document.getElementById('pwd').value;
        let confirmpassword = document.getElementById('cpwd').value;

        if (password !== confirmpassword) {
            alert('please confirm your password again');
        } else {
            if (this.valiadate(email, password)) {
                axios.post('/', {
                    username: email,
                    password: password
                })
                    .then((response) => {
                        axios.post('/profile', {
                            userName: email,
                            fullName:'',
                            contact: '',
                            skills: '',
                        })
                        .then(res => {})
                        .catch(err => {})

                        alert(response.data);
                    })
                    .catch((error) => {
                        alert(error);
                    });
            }
        }
    }

    render() {
        return (
            <div className="text-center">
                <NavBar></NavBar>
                <h3><b>SignUp To CueBlog</b></h3>
                <form className="well col-md-4 col-md-offset-4 text-left">
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="email" className="form-control" id="email"></input>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="pwd"></input>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="cpwd"></input>
                    </div>

                    <button type="button" className="btn btn-success" onClick={this.signUp}>SignUp</button>
                </form>
            </div>

        )
    }
}

export default SignUp;