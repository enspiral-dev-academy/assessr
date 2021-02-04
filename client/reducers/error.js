const initialState = ""

export default function error(state = initialState, action) {
  switch (action.type) {
    case "SHOW_ERROR":
      return action.message
    default:
      return state
  }
}
