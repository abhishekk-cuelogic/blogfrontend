import React, {Component} from 'react';
import NavBar from '../navbar/navbar';

class PasswordSet extends Component {

    componentWillMount = () => {
        console.log(this.props.match.params.token);
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
                    <button type="button" className="btn btn-success">Change Password</button><br/><br/>
                </form>
            </div>
        )
    }
}

export default PasswordSet;