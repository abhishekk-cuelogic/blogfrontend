import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import MainPage from './container/mainPage/mainPage';
import Modal from './component/modal/modal';
import asyncImports from './utility/asyncImports';


class App extends Component {
  render() {
    return (
          <div className="App">
          <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/signup' component={asyncImports.asyncSignUp}/>
              <Route exact path='/signin' component={asyncImports.asyncSignIn}/>
              <Route exact path='/blog/:id' component={asyncImports.asyncBlogPage}/>
              <Route exact path='/profile' component={asyncImports.asyncProfilePage}/>
              <Route exact path="/writeblog" component={asyncImports.asyncWriteBlog}/>
              <Route exact path="/editblog/:id" component={asyncImports.asyncEditBlog}/>
              <Route exact path='/forgotpassword' component={asyncImports.asyncForgotPassword}/>
              <Route exact path='/changepassword/:token' component={asyncImports.asyncChangePassword}/>
              <Route exact path='/dashboard' component={asyncImports.asyncDashboard}/>
              <Route exact path='/search/:catagory' component = {asyncImports.asyncSearch}/>
              <Route exact path='/myblog' component = {asyncImports.asyncMyBlog}/>
              <Route exact path='/authorprofile/:userName' component = {asyncImports.asyncAuthorProfile}/>
              <Route exact path='/modal' component = {Modal}/>
              <Route exact path='/adminpanel' component = {asyncImports.asyncAdminPanel}/>     
          </Switch>
         </div>
    );
  }
}

export default App;
