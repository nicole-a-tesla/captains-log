import * as types from './action-types'
import initialState from '../reducers/initial-state';

export const loadSpecies = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.INITIAL_SPECIES_LOAD,
      payload: initialState.species
    })
  }
}

export const editSightingsCount = (speciesId) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.TOGGLE_EDIT_SIGHTINGS_COUNT,
      payload: speciesId
    })
  }
}

export const updateSightingsCount = (speciesId, newSightingsCount) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.UPDATE_SIGHTINGS_COUNT,
      payload: {id: speciesId, sightings: newSightingsCount}
    }),
    dispatch({
      type: types.TOGGLE_EDIT_SIGHTINGS_COUNT,
      payload: speciesId
    })
  }
}

