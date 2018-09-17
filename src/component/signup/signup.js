import React, {Component} from 'react';

class SignUp extends Component {

    render() {
        return (
            <form className="well col-md-4 col-md-offset-4">
                <div className="form-group">
                    <label for="email">UserName</label>
                    <input type="email" className="form-control" id="email"></input>
                </div>

                <div className="form-group">
                    <label for="pwd">Password</label>
                    <input type="password" className="form-control" id="pwd"></input>
                </div>

                <button type="submit" className="btn btn-success">SignUp</button>
            </form>
        )
    }
}

export default SignUp;