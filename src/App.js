import React, { Component } from 'react';
import {LoginPage} from './components/Login/components/LoginPage';
import PageNavbar from './components/Login/components/PageNavbar';

class App extends Component {
  render() {
    return (
      <div>
        <PageNavbar/>
        <LoginPage />
      </div>
      
    );
  }
}

export default App;
