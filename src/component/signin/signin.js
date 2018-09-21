import React, {Component} from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import { connect } from 'react-redux';

class SignIn extends Component {


    signIn = () => {
        let email = document.getElementById('email').value;
        let password=document.getElementById('pwd').value;

        console.log(`email:${email} password:${password}`);

        axios.post('/signin',{
                username:email,
                password:password
            })
            .then((response) => {
                alert(response.data.message);
                this.props.onLoggedIn();
                localStorage.setItem('token',response.data.token);
                this.props.history.push('/');
            })
            .catch((error) => {
                alert(error);
            }) 
       }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <form className="well col-md-4 col-md-offset-4">
                    <div className="form-group">
                        <label for="email">UserName</label>
                        <input type="email" className="form-control" id="email"></input>
                    </div>

                    <div className="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" className="form-control" id="pwd"></input>
                    </div>

                    <button type="button" className="btn btn-success" onClick={this.signIn}>SignIn</button>
                </form>
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoggedIn : () => dispatch({type:"loggedIn"})
    }      
}

export default connect(null,mapDispatchToProps)(SignIn);