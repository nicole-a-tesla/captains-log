import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';
import green500 from 'material-ui/styles/colors';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

class SearchResults extends Component {
  renderResults() {
    let results = []

    if (this.props.results.length) {
      for (let result of this.props.results) {
        results.push(
          <ListItem 
            key={ result['name'] }
            primaryText={ result['name'] } 
            leftIcon={<Add color={green500} />} />
        )
      }
    }

    return results
  }

  render() {
    return(
      <List style={style} >
        { this.renderResults() }
      </List>
    )
  }

}

export default SearchResults
