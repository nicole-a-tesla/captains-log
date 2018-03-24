import * as types from './action-types'
import initialState from '../reducers/initial-state';

export const editSightingsCount = (speciesId) => {
  return (dispatch, getState) => {
    console.log('in editSightingsCount action creator')
    dispatch({
      type: types.EDIT_SIGHTINGS_COUNT,
      payload: speciesId
    })
  }
}

export const loadSpecies = () => {
  return (dispatch, getState) => {
    console.log('in LOAD action creator')
    dispatch({
      type: types.INITIAL_SPECIES_LOAD,
      payload: initialState.species
    })
  }
}
