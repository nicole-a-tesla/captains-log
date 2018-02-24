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

  renderAttributes() {
    let listItems = []
    for (let attribute of this.props.attributes) {
      listItems.push(<li>{ attribute }</li>)
    }
    return(
      <ul>
        { listItems }
      </ul>
    )
  }

  render() {
    return(
      <div ref='species' className='species'>
        <div ref='speciesName' >{ this.props.name }</div>
        <div ref='origin' >{ this.props.origin }</div>
        <div ref='attributes' >{ this.renderAttributes() }</div>
        <div ref='warpCapable' >{ this.props.warpCapable }</div>
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
