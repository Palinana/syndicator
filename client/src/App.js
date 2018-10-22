import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import CreateEventForm from './components/CreateEventForm';
import AdminPanel from './components/AdminPanel';

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <div className="App">
              <div className="container">
                  <Switch>
                      <Route exact path='/' component={AdminPanel} />
                      <Route exact path="/addEvent" component={CreateEventForm}/>
                  </Switch>
              </div>
          </div>
      </Router>
    )
  }
}

export default App;
