import { expect } from 'chai'
import React from 'react'
import sinon from 'sinon'

import jsdom from 'jsdom'
import ReactTestUtils from 'react-dom/test-utils'

import SpeciesList from '../species-list'
import SpeciesContainer from '../species-container'

describe('SpeciesContainer', function() {
  beforeEach(function() {
    this.terrellian = {
      name: 'Terrellian',
      origin: 'Unknown, Alpha Quadrant',
      attributes: ['humanoid'],
      warpCapable: 'false',
      sightings: 2
    }

    this.vulcan = {
      name: 'Vulcan',
      origin: 'Vulcan, Alpha Quadrant',
      warpCapable: 'true',
      attributes: ['humanoid','telepathic']
    }

    this.species = [this.terrellian, this.vulcan]

    this.speciesContainer = ReactTestUtils.renderIntoDocument(
      <SpeciesContainer 
        species={ this.species } 
      />
    )
  })

  it('renders a SpeciesList', function() {
    let speciesList = ReactTestUtils.findRenderedComponentWithType(
      this.speciesContainer,
      SpeciesList
    )
    expect(SpeciesList).to.exist
  })

  it('removes a species', function() {
  })

  it('edits a species sightings', function() {
  })
})

