import { combineReducers } from "redux"

import auth from "./auth"
import error from "./error"
import modules from "./modules"
import pending from "./pending"
import completed from "./completed"
import students from "./students"

export default combineReducers({
  auth,
  error,
  modules,
  pending,
  completed,
  students,
})
