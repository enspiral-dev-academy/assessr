import { getPendingSubmissions } from '../apis/teacher'

export function saveAllPending(subs) {
    return {
        type: 'SAVE_PENDING',
        pending: subs
    }
}

export function getAllPending () {
    return dispatch => {
        getPendingSubmissions()
            .then(subs => {
                dispatch(saveAllPending(subs))
            })
    }
  }

