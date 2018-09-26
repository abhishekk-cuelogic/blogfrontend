import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import MainPage from './container/mainPage/mainPage';
import SignUp from './component/signup/signup';
import SignIn from './component/signin/signin';
import BlogPage from './container/blogPage/blogPage';
import ProfilePage from './container/profilePage/profilePage';
import WriteBlog from './component/writeBlog/writeBlog';
import ForgotPassword from './component/forgotPassword/forgotPassword';
import ChangePassword from './component/forgotPassword/passwordSet';


class App extends Component {
  render() {
    return (
          <div className="App">
          <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/signin' component={SignIn}/>
              <Route exact path='/blog/:id' component={BlogPage}/>
              <Route exact path='/profile' component={ProfilePage}/>
              <Route exact path="/writeblog" component={WriteBlog}/>
              <Route exact path='/forgotpassword' component={ForgotPassword}/>
              <Route exact path='/changepassword/:token' component={ChangePassword}/>
          </Switch>
         </div>
    );
  }
}

export default App;
