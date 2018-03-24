import * as types from './action-types'

export const updateSearchFormValue = (newValue) => {
  return (dispatch, getState) => {
    console.log('in update action')
    console.log(newValue)
    dispatch({
      type: types.SEARCH_FORM_VALUE_CHANGE,
      payload: newValue
    })
  }
}

export const triggerSearch = (searchTerm) => {
  return (dispatch, getState) => {
    fetch('http://localhost:8000/search/' + searchTerm)
      .then((response) => response.json())
        .then((results) => {
          dispatch({
            type: types.UPDATE_SEARCH_RESULTS,
            payload: results.species
          })
        })
  }
}
