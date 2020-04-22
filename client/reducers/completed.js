const initialState = []

export default function completed (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_COMPLETED':
      return action.completed
    default:
      return state
  }
}
