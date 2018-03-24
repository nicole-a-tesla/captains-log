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
