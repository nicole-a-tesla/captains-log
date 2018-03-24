// import { expect } from 'chai';
// import React from 'react';
// import sinon from 'sinon';

// import jsdom from 'jsdom';
// import ReactTestUtils from 'react-dom/test-utils';

// import SpeciesList from '../js/species-list'
// import Species from '../js/species'

// describe('SpeciesList', function() {
//   beforeEach(function() {
//     this.terrellian = {
//       name: 'Terrellian',
//       origin: 'Unknown, Alpha Quadrant',
//       attributes: ['humanoid'],
//       warpCapable: 'false',
//       sightings: 2
//     }

//     this.vulcan = {
//       name: 'Vulcan',
//       origin: 'Vulcan, Alpha Quadrant',
//       warpCapable: 'true',
//       attributes: ['humanoid','telepathic']
//     }

//     this.species = [this.terrellian, this.vulcan]

//     this.onRemove = ()=>{}
//     this.onSightingsUpdate = ()=>{}

//     this.speciesList = ReactTestUtils.renderIntoDocument(
//       <SpeciesList 
//         species={ this.species } 
//         onRemove={ this.onRemove }
//         onSightingsUpdate={ this.onSightingsUpdate }
//       />
//     )
//   })

//   it('renders a species item for each species prop', function() {
//     let list = ReactTestUtils.scryRenderedComponentsWithType(
//       this.speciesList,
//       Species
//     )
//     expect(list.length).to.equal(this.species.length)
//   })

//   it('renders species items with correct props', function() {
//     let list = ReactTestUtils.scryRenderedComponentsWithType(
//       this.speciesList,
//       Species
//     )
//     let terrellian = list[0]
//     let vulcan = list[1]

//     expect(terrellian.props.name).to.equal(this.terrellian.name)
//     expect(terrellian.props.origin).to.equal(this.terrellian.origin)
//     expect(terrellian.props.attributes).to.equal(this.terrellian.attributes)
//     expect(terrellian.props.warpCapable).to.equal(this.terrellian.warpCapable)
//     expect(terrellian.props.sightings).to.equal(this.terrellian.sightings)
//     expect(terrellian.props.onSightingsUpdate).to.equal(this.onSightingsUpdate)
//     expect(terrellian.props.onRemove).to.equal(this.onRemove)

//     expect(vulcan.props.name).to.equal(this.vulcan.name)
//     expect(vulcan.props.origin).to.equal(this.vulcan.origin)
//     expect(vulcan.props.attributes).to.equal(this.vulcan.attributes)
//     expect(vulcan.props.warpCapable).to.equal(this.vulcan.warpCapable)
//     expect(vulcan.props.sightings).to.equal(this.vulcan.sightings)
//     expect(vulcan.props.onSightingsUpdate).to.equal(this.onSightingsUpdate)
//     expect(vulcan.props.onRemove).to.equal(this.onRemove)
//   })

//   it('renders column titles', function() {
//     let titles = this.speciesList.refs.titles
//     expect(titles).to.exist
//     expect(titles.innerHTML).to.contain('Name')
//     expect(titles.innerHTML).to.contain('Origin')
//     expect(titles.innerHTML).to.contain('Attributes')
//     expect(titles.innerHTML).to.contain('Warp Capable')
//     expect(titles.innerHTML).to.contain('Sightings')
//   })
// })
