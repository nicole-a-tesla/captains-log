import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SpeciesContainer from './js/species-container'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Captain's Log 💫  🚀  👽 </h1>
          </header>
          <SpeciesContainer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
