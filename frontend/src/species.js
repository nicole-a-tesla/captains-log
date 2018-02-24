import React, { Component } from 'react';
import './species.css';

class Species extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      editing: false ,
      sightings: this.props.sightings
    }
  }

  handleEditClick() {
    this.setState({editing: true})
  }

  handleSightingsChange(e) {
    e.preventDefault()
    this.setState({ sightings: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSightingsUpdate(this.state.sightings)
  }

  renderSightings() {
    if (this.state.editing) {
      return(
      <div ref='sightings' className='sightings'>
        <form 
          ref='editSightings' 
          onSubmit={ this.onSubmit.bind(this) } >

          <input type='number' 
            value={ this.state.sightings } 
            onChange={ this.handleSightingsChange.bind(this) } />

          <input 
            className='button update'
            ref='updateButton'
            type='submit' 
            value='update' />

        </form>
      </div>
      )
    }
    return(
      <div ref='sightings' className='sightings'>
        <p ref='sightingsCount' >{ this.state.sightings }</p>
        <button
          className='button update' 
          ref='editButton' 
          onClick={ this.handleEditClick.bind(this) }>
            Edit
        </button>
      </div>
    )
  }

  render() {
    return(
      <div ref='species' className='species'>
        <p ref='speciesName' >{ this.props.name }</p>
        <p ref='quadrant' >{ this.props.quadrant }</p>
        <p ref='type' >{ this.props.type }</p>
        <p ref='warpCapable' >{ this.props.warpCapable }</p>
        { this.renderSightings() }
        <button 
          className='button remove'
          ref='removeButton' 
          onClick={ this.props.onRemove.bind(this) }>
            Remove
        </button>
      </div>
    )
  }
}


export default Species;
