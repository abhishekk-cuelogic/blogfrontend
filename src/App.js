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
import DashBoard from './component/dashboard/dashboard';
import Search from './component/search/search';
import MyBlog from './component/myblog/myblog';
import AuthorProfile from './component/authorprofile/authorprofile';
import EditBlog from './component/editBlog/editBlog';
import Modal from './component/modal/modal';


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
              <Route exact path="/editblog/:id" component={EditBlog}/>
              <Route exact path='/forgotpassword' component={ForgotPassword}/>
              <Route exact path='/changepassword/:token' component={ChangePassword}/>
              <Route exact path='/dashboard' component={DashBoard}/>
              <Route exact path='/search/:catagory' component = {Search}/>
              <Route exact path='/myblog' component = {MyBlog}/>
              <Route exact path='/authorprofile/:userName' component = {AuthorProfile}/>
              <Route exact path='/modal' component = {Modal}/>
          </Switch>
         </div>
    );
  }
}

export default App;
