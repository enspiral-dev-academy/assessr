import moduleData from "../moduleData"

const initialState = moduleData

export default function modules(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
