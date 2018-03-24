import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaptainsLogContainer from './js/captains-log-container'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Captain's Log 💫  🚀  👽 </h1>
          </header>
          <CaptainsLogContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
