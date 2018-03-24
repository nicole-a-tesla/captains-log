import initialState from './initial-state';
import { 
  TOGGLE_EDIT_SIGHTINGS_COUNT, 
  UPDATE_SIGHTINGS_COUNT,
  INITIAL_SPECIES_LOAD 
} from '../actions/action-types';

export default (state=initialState.species, action) => {
  switch(action.type) {

    case INITIAL_SPECIES_LOAD: 
      return action.payload

    case TOGGLE_EDIT_SIGHTINGS_COUNT: 
      return state.map((species) => {
        if (species.id === action.payload) {
          species.editing = !species.editing 
        }
        return species
      })
    
    case UPDATE_SIGHTINGS_COUNT: 
      return state.map((species) => {
        if (species.id === action.payload.id) {
          species.sightings = action.payload.sightings
        }
        return species
      })

    default: 
      return state
  }
}
