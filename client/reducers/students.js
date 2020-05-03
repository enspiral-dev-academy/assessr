const initialState = []

export default function students (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_ALL_STUDENTS':
      return action.students
    default:
      return state
  }
}
