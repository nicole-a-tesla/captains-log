import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SpeciesList from './species-list'

var species = [
  {
    name: 'Terrellian',
    origin: 'Unknown, Alpha Quadrant',
    attributes: ['humanoid'],
    warpCapable: 'false',
    sightings: 2
  },
  {
    name: 'Vulcan',
    origin: 'Vulcan, Alpha Quadrant',
    warpCapable: 'true',
    attributes: ['humanoid','telepathic'],
    sightings: 400
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Captain's Log 💫  🚀  👽 </h1>
        </header>
        <SpeciesList
          species={ species }
          onSightingsUpdate={ (e)=>{ console.log(e) } }
          onRemove={ ()=>{ console.log('Removed!') } }
        />
      </div>
    );
  }
}

export default App;
