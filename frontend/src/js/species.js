import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const nameStyle = {
  marginLeft: 20
}

const sightingsStyle = {
  display: 'inline-flex'
}

const editStyle = {
}

const pStyle = {
  display: 'inline'
}


class Species extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      sightings: this.props.sightings
    }
  }

  handleSightingsChange(e) {
    e.preventDefault()
    this.setState({ sightings: e.target.value })
  }

  handleRemoveClick(e) {
    e.preventDefault()
    this.props.onRemove(this.props.id)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.updateSightingsCount(this.props.id, this.state.sightings)
  }

  renderSightings() {
    if (this.props.editing) {
      return(
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
      )
    }
    return(
      <div style={{display: 'inline-flex'}}>
        <p ref='sightingsCount' >{ this.state.sightings }</p>
        <RaisedButton
          label='Edit'
          ref='editButton' 
          onClick={ () => this.props.editSightingsCount(this.props.id) } />
        </div>
    )
  }

  renderAttributes() {

    let listItems = []

    this.props.attributes.forEach((attribute, index) => {
      listItems.push(<li key={index} >{ attribute }</li>)
    })

    return(
      <ul>
        { listItems }
      </ul>
    )
  }

  render() {
    return(
      <TableRow ref='species'>
        <TableRowColumn style={nameStyle} >{ this.props.name }</TableRowColumn>
        <TableRowColumn>{ this.props.origin }</TableRowColumn>
        <TableRowColumn>{ this.props.warpCapable }</TableRowColumn>
        <TableRowColumn>{ this.renderAttributes() }</TableRowColumn>
        <TableRowColumn style={sightingsStyle} ref='sightings'>
          { this.renderSightings() }
        </TableRowColumn>
        <TableRowColumn>
          <RaisedButton
            style={editStyle}
            label='Remove'
            className='button remove'
            ref='removeButton' 
            onClick={ this.handleRemoveClick.bind(this) } />
        </TableRowColumn>
      </TableRow>
    )
  }
}

export default Species
