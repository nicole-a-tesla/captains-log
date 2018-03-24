import React, { Component } from 'react'

import SpeciesList from './species-list'
import Search from './search'

class CaptainsLogContainer extends Component {
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

  render() {
    return(
      <div>
        <Search />
        <SpeciesList 
          onRemove={ this.onRemove }
          onSightingsUpdate={ this.onSightingsUpdate }
          species={ this.state.species } />
      </div>
    )
  }
}

export default CaptainsLogContainer
