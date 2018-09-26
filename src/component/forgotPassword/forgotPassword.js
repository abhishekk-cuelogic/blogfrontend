import React, {Component} from 'react';
import NavBar from '../navbar/navbar';

class ForgotComponent extends Component {

    render() {

        return (
            <div className="text-center">
                <NavBar></NavBar>
                <div>
                <b>Enter your username and we will send you a link to reset your password.</b>
                </div><br/>     
                <form className="well col-md-4 col-md-offset-4 text-left">
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="email" className="form-control" id="email"></input>
                    </div>
                    <button type="button" className="btn btn-success">Send Mail</button><br/><br/>
                </form>
            </div>
        )
    }
}

export default ForgotComponent;