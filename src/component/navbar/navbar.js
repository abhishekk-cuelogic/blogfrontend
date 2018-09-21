import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {

        let navComponent;
        console.log(this.props.loggedIn);

        if(!this.props.loggedIn) {
            navComponent = <ul className="nav navbar-nav navbar-right">
             <li><Link to={"/signup"}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
             <li><Link to={"/signin"}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
             </ul> 
        } else {
            navComponent = <ul className="nav navbar-nav navbar-right">
            <li><Link to={"/signup"}><span className="glyphicon glyphicon-user"></span> Profile</Link></li>
            </ul>  
        }

        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">CueBlog</a>
                    </div>
                    {navComponent}
                </div>
            </nav>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        loggedIn:state.loggedIn
    }
}

export default connect(mapStateToProps)(Navbar);