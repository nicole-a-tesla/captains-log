import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Species from './species'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Captain's Log 💫  🚀  👽 </h1>
        </header>
        <Species 
          name={ 'Terrellian' }
          quadrant={ 'Alpha' }
          type={ 'humanoidSpecies' }
          warpCapable={ 'false' }
          sightings={ 6 }
          onSightingsUpdate={ (e)=>{ console.log(e) } }
        />
      </div>
    );
  }
}

export default App;
