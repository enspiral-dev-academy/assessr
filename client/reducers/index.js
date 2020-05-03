import {combineReducers} from 'redux'

import auth from './auth'
import modules from './modules'
import pending from './pending'
import completed from './completed'
import students from './students'

export default combineReducers({
  auth,
  modules,
  pending,
  completed,
  students
})
