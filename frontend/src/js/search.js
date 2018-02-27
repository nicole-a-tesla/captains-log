import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import SearchResults from './search-results'

const style = {
    margin: 12,
};

class Search extends Component {
  render() {
    return(
      <div>
        <TextField 
          ref='searchform'
          hintText='Search Species'
          onChange={ this.props.updateSearchFormValue.bind(this) }/>
        <RaisedButton 
          label='Search' 
          primary={ true } 
          style={ style } 
          onClick={ this.props.triggerSearch.bind(this) } />
        <SearchResults results={ this.props.searchResults } />
      </div>
    )
  }
}

export default Search
