import React, {Component} from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import { connect } from 'react-redux';
import validator from 'validator';
import {Link} from 'react-router-dom';

class SignIn extends Component {


    validate = (email,password) => {
    
        if(validator.isEmpty(email)){
            alert('please enter email');
            return false
        }
        
        if(validator.isEmpty(password)){
            alert('please enter password');
            return false;
        }

        if(!validator.isEmail(email)) {
            alert('plese enter valid email');
            return false;
            
        }

        return true;

    }


    signIn = () => {

        let email = document.getElementById('email').value;
        let password=document.getElementById('pwd').value;

        if(this.validate(email,password)){

            axios.post('/signin',{
                username:email,
                password:password
            })
            .then((response) => {
                if(response.data.message) { 
                    alert("Login SuccessFul");   
                    this.props.onLoggedIn();
                    this.props.onNavigationClicked();
                    localStorage.setItem('token',response.data.token);
                    localStorage.setItem('userName',response.data.username);
                    this.props.history.push('/');
                } else {
                    alert("Login Unsuccessful");
                }               
            })
            .catch((error) => {
                alert(error);
            }) 

        };        
       }

    render() {
        return (
            <div className="text-center">
                <NavBar></NavBar>
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