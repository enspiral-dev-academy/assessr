const initialState = []

export default function completed (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_COMPLETED':
      return action.completed
    case 'PENDING_ASSESSMENT':
      // try update existing
      let updated = false
      state = state.map(assmt => {
        if(assmt.code == action.code) {
          assmt.status = "pending review"
          updated = true
        }
        return assmt
      })
      // but if there was nothing to update...
      if(!updated) {
        state = [...state, {
          code: action.code, 
          status: "pending review", 
          assessment_record : action.record_id
        }]
      }
      return state
    default:
      return state
  }
}
