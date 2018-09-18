import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import MainPage from './container/mainPage';
import SignUp from './component/signup/signup';
import SignIn from './component/signin/signin';

class App extends Component {
  render() {
    return (
          <div className="App">
          <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/signin' component={SignIn}/>
          </Switch>
         </div>
    );
  }
}

export default App;
