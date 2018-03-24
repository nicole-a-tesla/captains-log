import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configure-store';

import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CaptainsLogContainer from './js/captains-log-container'

const store = configureStore();

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <MuiThemeProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Captain's Log 💫  🚀  👽 </h1>
            </header>
            <CaptainsLogContainer />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
