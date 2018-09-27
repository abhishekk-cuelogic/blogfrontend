import React, {Component} from 'react';
import NavBar from '../navbar/navbar';
import axios from '../../axiosInstance';

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

    changePassword = () => {
        //alert("changepassord");
        let passWord = document.getElementById('pwd').value;
        let confirmPassword = document.getElementById('cpwd').value;
        
        if(passWord !== confirmPassword) {
            alert('plese confirm your password again');
        } else {
            axios.post('/signin/resetpassword',{
                userName : this.state.userName,
                passWord:passWord
            })
            .then(res => {
                alert(res.data);
            })
            .catch(err => {
                alert(err);
            })
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