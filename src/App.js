import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import SignUp from './component/signup/signup';
import SignIn from './component/signin/signin';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Navbar></Navbar>
            <Switch>
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/signin' component={SignIn}/>
            </Switch>
         </div>
      </Router>
      
    );
  }
}

export default App;
