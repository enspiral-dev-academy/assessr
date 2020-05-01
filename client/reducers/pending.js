const initialState = []

export default function completed (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_PENDING':
      return action.pending
    default:
      return state
  }
}
