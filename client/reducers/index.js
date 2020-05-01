import {combineReducers} from 'redux'

import auth from './auth'
import modules from './modules'
import pending from './pending'
import completed from './completed'


export default combineReducers({
  auth,
  modules,
  pending,
  completed
})
