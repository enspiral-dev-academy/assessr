const initialState = []

export default function completed (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_PENDING':
      return action.pending
    case 'HAS_BEEN_REVIEWED':
      return state.filter(pending => pending.record_id != action.record_id)
    default:
      return state
  }
}
