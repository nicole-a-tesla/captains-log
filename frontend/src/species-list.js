import React, { Component } from 'react';

import Species from './species'


class SpeciesList extends Component {
  renderSpeciesList() {
    let speciesList = []
    for (let species of this.props.species) {
      speciesList.push(
        <Species 
          name={ species.name }
          origin={ species.origin }
          warpCapable={ species.warpCapable }
          sightings={ species.sightings }
          attributes={ species.attributes }
          onRemove={ this.props.onRemove }
          onSightingsUpdate={ this.props.onSightingsUpdate } />
      )
    }
    return speciesList
  }

  render() {
    return(
      <div className='species-list'>
        { this.renderSpeciesList() }
      </div>
    )
  }
}

export default SpeciesList;
