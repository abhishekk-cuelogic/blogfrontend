import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    state = {
        loggedIn : true
    }

    signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        this.setState({
            ...this.state,
            loggedIn : false
        })
    }

    render() {
        let navComponent,searchComponent;

        let adminPanel = null;

        if(localStorage.getItem('userName') === 'admin@gmail.com') {
            adminPanel = <li><Link to="/adminpanel"><b>AdminPanel</b></Link></li> 
        }

        if(localStorage.getItem('token') === null) {
            navComponent = <ul className="nav navbar-nav navbar-right">
             <li><Link to={"/signup"} onClick={this.props.onNavigationClicked}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
             <li><Link to={"/signin"} onClick={this.props.onNavigationClicked}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
             </ul> 
        }
        if(localStorage.getItem('token')) {
            navComponent = <ul className="nav navbar-nav navbar-right">
                <li className="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span> Profile </a>
                    <ul className="dropdown-menu">
                    {adminPanel}<br/>
                    <li><Link to="/profile"><b>Your Profile</b></Link></li><br/>
                    <li><Link to="/writeblog"><b>Write Blog</b></Link></li><br/>
                    <li><Link to="/dashboard"><b>DashBoard</b></Link></li><br/>
                    <li><Link to="/myblog"><b>MyBlogs</b></Link></li><br/>
                    <li><Link to="/" onClick={this.signOut}><b>Sign Out</b></Link></li>
                    </ul>
                </li>
            </ul>  
        }

        if(window.location.href !== 'http://localhost:3000/signup' && window.location.href !== 'http://localhost:3000/signin' ) {
               searchComponent = <ul className="nav navbar-nav navbar-center">
                                    <li><Link to='/search/sports'><b>SPORTS</b></Link></li>
                                    <li><Link to='/search/technology'><b>TECHNOLOGY</b></Link></li>
                                    <li><Link to='/search/economics'><b>ECONOMICS</b></Link></li>
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

export default Navbar;