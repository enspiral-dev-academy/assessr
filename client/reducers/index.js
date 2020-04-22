import {combineReducers} from 'redux'

import auth from './auth'
import modules from './modules'
import completed from './completed'


export default combineReducers({
  auth,
  modules,
  completed
})
