import React, { Component } from 'react'

import SpeciesList from './species-list'
import Search from './search'

class SpeciesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFormValue: '',
      searchResults: {},
      species: [
        {
          id: 'abc123',
          name: 'Terrellian',
          origin: 'Unknown, Alpha Quadrant',
          attributes: ['humanoid'],
          warpCapable: 'false',
          sightings: 2
        },
        {
          id: 'xyz987',
          name: 'Vulcan',
          origin: 'Vulcan, Alpha Quadrant',
          warpCapable: 'true',
          attributes: ['humanoid','telepathic'],
          sightings: 400
        }
      ]
    }
  }

  onRemove(speciesId) {
  }

  onSightingsUpdate(speciesId, newSightingsCount) {
  }

  updateSearchFormValue(e) {
    this.setState({searchFormValue: e.target.value})
  }

  triggerSearch() {
    fetch('http://localhost:8000/search/' + this.state.searchFormValue).then( 
      (results) => results.json() 
    ).then( 
      (resultsJson) => {
        this.setState({ searchResults: resultsJson['species'] })
    })


  }

  render() {
    return(
      <div>
        <Search 
          searchResults={ this.state.searchResults }
          updateSearchFormValue={ this.updateSearchFormValue.bind(this) }
          triggerSearch={ this.triggerSearch.bind(this) } />
        <SpeciesList 
          onRemove={ this.onRemove }
          onSightingsUpdate={ this.onSightingsUpdate }
          species={ this.state.species } />
      </div>
    )
  }
}

export default SpeciesContainer
