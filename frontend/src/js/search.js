import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import SearchResults from './search-results'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchFormValue, triggerSearch } from '../actions/search-actions';

const style = {
    margin: 12,
};

class Search extends Component {
  onChange(e) {
    this.props.updateSearchFormValue(e.target.value)
  }

  render() {
    return(
      <div>
        <TextField 
          ref='searchform'
          hintText='Search Species'
          onChange={ this.onChange.bind(this) }/>
        <RaisedButton 
          label='Search' 
          primary={ true } 
          style={ style } 
          onClick={ () => this.props.triggerSearch(this.props.searchFormValue) } />
        <SearchResults results={ this.props.searchResults } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    searchFormValue: state.search.searchFormValue,
    searchResults: state.search.searchResults
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateSearchFormValue,
  triggerSearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Search)
