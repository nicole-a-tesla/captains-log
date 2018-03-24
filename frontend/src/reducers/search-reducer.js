import initialState from './initial-state';
import { SEARCH_FORM_VALUE_CHANGE, UPDATE_SEARCH_RESULTS } from '../actions/action-types';

export default (state=initialState.search, action) => {
  switch(action.type) {
    case SEARCH_FORM_VALUE_CHANGE:
      return {
        ...state,
        searchFormValue: action.payload
      }
    case UPDATE_SEARCH_RESULTS: 
      return {
        ...state,
        searchResults: action.payload
      }
    default: 
      return state
  }
}

