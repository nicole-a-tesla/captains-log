import React, { Component } from 'react';

import Species from './species'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

const titlesStyle =  {
  display: 'inline-flex',
  listStyle: 'none'
}

const listStyle = {
  marginLeft: 50,
  marginRight: 50
}


class SpeciesList extends Component {
  renderSpeciesList() {
    let speciesList = []
    for (let species of this.props.species) {
      speciesList.push(
        <Species 
          id={ species.id }
          name={ species.name }
          origin={ species.origin }
          warpCapable={ species.warpCapable }
          sightings={ species.sightings }
          attributes={ species.attributes }
          onRemove={ this.props.onRemove }
          onSightingsUpdate={ this.props.onSightingsUpdate } />
      )
    }
    return speciesList
  }

  render() {
    return(
			<Table>
				<TableHeader displaySelectAll={ false }>
					<TableRow>
						<TableHeaderColumn>Name</TableHeaderColumn>
						<TableHeaderColumn>Origin</TableHeaderColumn>
						<TableHeaderColumn>Warp Capable</TableHeaderColumn>
						<TableHeaderColumn>Attributes</TableHeaderColumn>
						<TableHeaderColumn>Sightings</TableHeaderColumn>
						<TableHeaderColumn>Remove</TableHeaderColumn>
					</TableRow>
				</TableHeader>
        <TableBody>
          { this.renderSpeciesList() }
        </TableBody>
      </Table>
    )
  }
}

export default SpeciesList;
