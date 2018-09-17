import React, {Component} from 'react';

class SignUp extends Component {

    render() {
        return (
            <form class="well col-md-4 col-md-offset-4">
                <div class="form-group">
                    <label for="email">UserName</label>
                    <input type="email" class="form-control" id="email"></input>
                </div>

                <div class="form-group">
                    <label for="pwd">Password</label>
                    <input type="password" class="form-control" id="pwd"></input>
                </div>

                <button type="submit" class="btn btn-success">SignUp</button>
            </form>
        )
    }
}

export default SignUp;