import React from 'react';
import {Link} from 'react-router-dom';


const navbar = () => {
   
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#">CueBlog</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                <li><Link to={"/signup"}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                <li><Link to={"/signin"}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default navbar;