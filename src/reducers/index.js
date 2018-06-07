import CountReducer from './CountReducer'
import TodoReducer from './TodoReducer'
import {combineReducers} from 'redux'

export default combineReducers({countredu : CountReducer,todoredu :TodoReducer})