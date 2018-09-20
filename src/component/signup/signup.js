import React, {Component} from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';

class SignUp extends Component {


    signUp = () => {
        let email=document.getElementById('email').value;
        let password=document.getElementById('pwd').value;
        console.log(`email = ${email}  password = ${password}`);

        axios.post('/', {
            username:email,
            password:password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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

                    <button type="button" className="btn btn-success" onClick={this.signUp}>SignUp</button>
                </form>
            </div>
            
        )
    }
}

export default SignUp;