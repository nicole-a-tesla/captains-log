import initialState from './initial-state';
import { EDIT_SIGHTINGS_COUNT, INITIAL_SPECIES_LOAD } from '../actions/action-types';

export default (state=initialState.species, action) => {
  switch(action.type) {

    case INITIAL_SPECIES_LOAD: 
      return action.payload

    case EDIT_SIGHTINGS_COUNT: 
      return state.map((species) => {
        if (species.id === action.payload) {
          species.editing = true
        }
        return species
      })

    default: 
      return state
  }
}
