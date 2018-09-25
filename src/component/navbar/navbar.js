import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        this.props.onLoggedOut();
    }

    render() {
        let navComponent,searchComponent;

        if(!this.props.loggedIn) {
            navComponent = <ul className="nav navbar-nav navbar-right">
             <li><Link to={"/signup"} onClick={this.props.onNavigationClicked}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
             <li><Link to={"/signin"} onClick={this.props.onNavigationClicked}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
             </ul> 
        } else {
            navComponent = <ul className="nav navbar-nav navbar-right">
                <li className="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> Profile </a>
                    <ul className="dropdown-menu">
                    <li><Link to="/profile"><b>Your Profile</b></Link></li><br/>
                    <li><Link to="/writeblog"><b>Write Blog</b></Link></li><br/>
                    <li><Link to="/writeblog"><b>DashBoard</b></Link></li><br/>
                    <li><Link to="/" onClick={this.signOut}><b>Sign Out</b></Link></li>
                    </ul>
                </li>
            </ul>  
        }

        if(!this.props.clicked || this.props.loggedIn ) {
               searchComponent = <ul className="nav navbar-nav navbar-center">
                                    <li><a><b>SPORTS</b></a></li>
                                    <li><a><b>TECH</b></a></li>
                                    <li><a><b>SCIENCE</b></a></li>
                               </ul>
               } else {
                   searchComponent = null;
               }

        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand"><Link to='/'>CueBlog</Link></a>;
                    </div>
                    {searchComponent}
                    {navComponent}
                </div>
            </nav>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        loggedIn:state.navReducer.loggedIn,
        clicked:state.navReducer.clicked
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoggedOut: () => dispatch({type:"LOGGEDOUT"}),
        onNavigationClicked: () => dispatch({type:"NAVCLICKED",payload:5})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);