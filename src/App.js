import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import { routes } from './utility/routes';


class App extends Component {

  render() {

    let location = window.location.href;
    let url = location.split('http://localhost:3000')[1];
    let route = null;
    let m = url.split('/')

    if(m.length > 2) {
       route=routes.map(obj => {
        if(obj.path === m[1]) {
          return(
            <Switch>
              <Route exact path={'/'+m[1]+'/:id'} component={obj.component} />
            </Switch>
          )
        }
      })
    } else {
       route=routes.map(obj => {
        if(obj.path === url) {
          return(
            <Switch>
              <Route exact path={obj.path} component={obj.component} />
            </Switch>
          )
        }
        console.log(url.split('/'))
      })
    }

    return (
        <div className="App">
          {route}
        </div>
    );
  }
}

export default App;
