import React, { Component } from 'react';

import Species from './species'
import '../css/species-list.css';


class SpeciesList extends Component {
  renderSpeciesList() {
    let speciesList = []
    for (let species of this.props.species) {
      speciesList.push(
        <Species 
          id={ species.id }
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
        <ul ref='titles' className='titles'>
          <li>Name</li>
          <li>Origin</li>
          <li>Attributes</li>
          <li>Warp Capable</li>
          <li>Sightings</li>
        </ul>
        { this.renderSpeciesList() }
      </div>
    )
  }
}

export default SpeciesList;
