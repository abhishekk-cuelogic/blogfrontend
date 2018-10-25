import React, {Component} from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import { connect } from 'react-redux';
import validator from 'validator';
import {Link} from 'react-router-dom';
import Modal from '../modal/modal';
import userService from '../../services/userService';



class SignIn extends Component {

    state = {
        response : '',
        show:false
    }

    fade = () => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                show: false
            })
        }, 2000)
    }

    validate = (email,password) => {
    
        if(validator.isEmpty(email)){
            this.setState({
                ...this.state,
                response:'Please Enter Email',
                show:true
            })
            this.fade();
            return false
        }
        
        if(validator.isEmpty(password)){
            this.setState({
                ...this.state,
                response:'please enter password',
                show:true
            })
            this.fade();
            return false;
        }

        if(!validator.isEmail(email)) {
            this.setState({
                ...this.state,
                response:'plese enter valid email',
                show:true
            })
            this.fade();
            return false;
            
        }

        return true;

    }

    signIn = () => {

        let email = document.getElementById('email').value;
        let password=document.getElementById('pwd').value;

        if(this.validate(email,password)){
         userService.userSignIn(email,password)
         .then(response => {
            if(response.data.message) { 
                this.setState({
                    ...this.state,
                    response:'Login Successful',
                    show:true
                })
                this.fade();   
                this.props.onLoggedIn();
                this.props.onNavigationClicked();
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('userName',response.data.username);
                this.props.history.push('/');
            } else {
                this.setState({
                    ...this.state,
                    response:'Login Unsuccessful',
                    show:true
                })
                this.fade();
            }               

        })
        .catch(error => {
            this.setState({
                ...this.state,
                response: error,
                show:true
            })
            this.fade(); 
        })

        };
       }

    render() {
        let message = null;

        if (this.state.show) {
            message = <Modal res={this.state.response}></Modal>
        }
        return (
            <div className="text-center">
                <NavBar></NavBar>
                {message}
                <h3><b>SignIn To CueBlog</b></h3>
                <form className="well col-md-4 col-md-offset-4 text-left">
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="email" className="form-control" id="email"></input>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="pwd"></input>
                    </div>

                    <button type="button" className="btn btn-success" onClick={this.signIn}>SignIn</button><br/><br/>
                    <b><Link to="/forgotpassword">forgot password?</Link></b>
                </form>
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoggedIn : () => dispatch({type:"LOGGEDIN"}),
        onNavigationClicked : () => dispatch({type:"NAVCLICKED"})
    }      
}

export default connect(null,mapDispatchToProps)(SignIn);