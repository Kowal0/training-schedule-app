import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import {LoginPage} from './components/Login/components/LoginPage';
import {ProfilePage} from './components/Profile/components/ProfilePage';
import {RotaPage} from './components/Rota/components/RotaPage';
import PageNavbar from './components/Login/components/PageNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <PageNavbar/>
          <Route path={process.env.PUBLIC_URL + '/'} exact={true} component={LoginPage} />
          <Route path={process.env.PUBLIC_URL + "/profile"} exact={true} component={ProfilePage} />
          <Route path={process.env.PUBLIC_URL + "/rota"} exact={true} component={RotaPage} />
        </Fragment>
      </Router>
      
    );
  }
}

export default App;
