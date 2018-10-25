import React, {Component} from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';
import userService from '../../services/userService';
import validator from 'validator';

class PasswordSet extends Component {

    state = {
        userName : null
    }

    constructor ({match}) {
        super({match});
        console.log(this.props.match.params.token);

        axios.post('/signin/gettoken',{
            token : this.props.match.params.token
        })
        .then(res => {
            console.log(res);
            this.setState({
                ...this.state,
                userName:res.data.userName
            })
        })
        .catch(err => {
            console.log(err);
        }) 
    }

    validate = (password) => {
    
        if(validator.isEmpty(password)){
            alert('Plese enter password');
            return false;
        }
        
        return true;

    }

    changePassword = () => {
        let passWord = document.getElementById('pwd').value;
        let confirmPassword = document.getElementById('cpwd').value;
        let userName = this.state.userName
        
        if(passWord !== confirmPassword) {
            alert('plese confirm your password again');
        } else {
            if(this.validate(passWord)) {
                userService.resetPassword(userName,passWord)
                .then(response => {
                    alert(response);
                })
                .catch(error => {
                    alert(error);
                })
            }
        }   
    }

    render() {
        return (
            <div className="text-center">
                <NavBar></NavBar>     
                <form className="well col-md-4 col-md-offset-4 text-left">
                    <div className="form-group">
                        <label>Set new Password</label>
                        <input type="password" className="form-control" id="pwd"></input>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="cpwd"></input>
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.changePassword}>Change Password</button><br/><br/>
                </form>
            </div>
        )
    }
}

export default PasswordSet;