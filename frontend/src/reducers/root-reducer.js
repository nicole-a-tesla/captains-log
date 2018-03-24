import {combineReducers} from 'redux'
import searchReducer from './search-reducer'
import speciesReducer from './species-reducer'

export default combineReducers({
    search: searchReducer,
    species: speciesReducer
});
