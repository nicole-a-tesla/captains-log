// import { expect } from 'chai';
// import React from 'react';
// import sinon from 'sinon';

// import jsdom from 'jsdom';
// import ReactTestUtils from 'react-dom/test-utils';

// import Species from '../js/species'

// describe('Species', function() {
//   beforeEach(function() {
//     let attributes = ['Shape shifting', 'telepathic']
//     this.species = ReactTestUtils.renderIntoDocument(
//        <Species 
//           id={ 'abc' }
//           name={ 'Species Name' }
//           origin={ 'Alpha' }
//           attributes={ attributes }
//           warpCapable={ 'false' }
//           sightings={ 1 }
//           onSightingsUpdate={ () => {} }
//           onRemove={ () => {} }
//        />
//     );
//   })

//   it('displays name', function() {
//     let name = this.species.refs.speciesName
//     expect(name.innerHTML).to.equal('Species Name');
//   })

//   it('displays origin', function() {
//     let origin = this.species.refs.origin
//     expect(origin.innerHTML).to.equal('Alpha');
//   })

//   it('displays attributes', function() {
//     let attributes = this.species.refs.attributes
//     expect(attributes.innerHTML).to.contain('Shape shifting');
//     expect(attributes.innerHTML).to.contain('telepathic');
//   })

//   it('displays warp capability', function() {
//     let warpCapable = this.species.refs.warpCapable
//     expect(warpCapable.innerHTML).to.equal('false');
//   })

//   it('displays sightings', function() {
//     let sightings = this.species.refs.sightingsCount
//     expect(sightings.innerHTML).to.equal('1');
//   })

//   it('displays edit button', function() {
//     let edit = this.species.refs.editButton
//     expect(edit.innerHTML).to.equal('Edit');
//   })

//   it('displays remove button', function() {
//     let remove = this.species.refs.removeButton
//     expect(remove.innerHTML).to.equal('Remove');
//   })

//   it('editing is false by default', function() {
//     expect(this.species.state.editing).to.equal(false);
//   })

//   it('sets edit to true if edit clicked', function() {
//     let editButton = this.species.refs.editButton
//     ReactTestUtils.Simulate.click(editButton)
//     expect(this.species.state.editing).to.equal(true);
//   })

//   it('renders editSightings form if edit true', function() {
//     let editButton = this.species.refs.editButton
//     ReactTestUtils.Simulate.click(editButton)
//     expect(this.species.refs.editSightings).to.exist
//   })

//   it('calls update sightings callback on submit', function() {
//     let spy = sinon.spy()
//     let species = ReactTestUtils.renderIntoDocument(
//        <Species 
//           id={ 'abc' }
//           name={ 'Species Name' }
//           origin={ 'Alpha' }
//           attributes={ 'Shape Shifting' }
//           warpCapable={ 'false' }
//           sightings={ 1 }
//           onSightingsUpdate={ spy }
//           onRemove={ ()=>{} }
//        />
//     );

//     let editButton = species.refs.editButton
//     ReactTestUtils.Simulate.click(editButton)

//     let form = species.refs.editSightings
//     ReactTestUtils.Simulate.submit(form)

//     expect(spy.calledWith('abc', 1)).to.equal(true);
//   })

//   it('calls remove callback on remove click', function() {
//     let spy = sinon.spy()
//     let species = ReactTestUtils.renderIntoDocument(
//        <Species 
//           id={ 'abc' }
//           name={ 'Species Name' }
//           origin={ 'Alpha' }
//           attributes={ 'Shape Shifting' }
//           warpCapable={ 'false' }
//           sightings={ 1 }
//           onSightingsUpdate={ ()=>{} }
//           onRemove={ spy }
//        />
//     );

//     let removeButton = species.refs.removeButton
//     ReactTestUtils.Simulate.click(removeButton)

//     expect(spy.calledWith('abc')).to.equal(true);
//   })
// })

