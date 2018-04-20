import * as types from './action-types'
import initialState from '../reducers/initial-state';
import { adaptListFromBackend } from '../data-adapter'

export const loadSpecies = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:8000/species/')
      .then((response) => response.json())
        .then((resJson) => adaptListFromBackend(resJson))
          .then((result) => {
            dispatch({
              type: types.INITIAL_SPECIES_LOAD,
              payload: result
            })
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
    fetch('http://localhost:8000/species/' + speciesId + '/sightings/' + newSightingsCount, {method: 'POST'})
      .then((response) => {
        dispatch({
          type: types.UPDATE_SIGHTINGS_COUNT,
          payload: {id: speciesId, sightings: newSightingsCount}
        }),
        dispatch({
          type: types.TOGGLE_EDIT_SIGHTINGS_COUNT,
          payload: speciesId
        })
      })
      .catch((e) => console.log(e))
  }
}

