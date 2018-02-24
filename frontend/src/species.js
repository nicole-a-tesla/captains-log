import React, { Component } from 'react';

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
        <form 
          ref='editSightings' 
          onSubmit={ this.onSubmit.bind(this) } >

          <input type='number' 
            value={ this.state.sightings } 
            onChange={ this.handleSightingsChange.bind(this) } />

          <input 
            ref='updateButton'
            type='submit' 
            value='update' />

        </form>
      )
    }
    return(<p ref='sightingsCount' >{ this.state.sightings }</p>)
  }

  render() {
    return(
      <div ref='species'>
        <p ref='speciesName' >{ this.props.name }</p>
        <p ref='quadrant' >{ this.props.quadrant }</p>
        <p ref='type' >{ this.props.type }</p>
        <p ref='warpCapable' >{ this.props.warpCapable }</p>
        <div ref='sightings'>
          { this.renderSightings() }
        </div>
        <button ref='editButton' onClick={ this.handleEditClick.bind(this) }>
          Edit
        </button>
        <button 
          ref='removeButton' 
          onClick={ this.props.onRemove.bind(this) }>
            Remove
        </button>
      </div>
    )
  }
}


export default Species;
