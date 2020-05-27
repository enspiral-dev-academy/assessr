import { getUserAssessments, saveSubmission } from '../apis/assessments'

export function loadingAssmts() {
    return {
        type: 'LOADING_ALL'
    }
}

export function saveAllCompleted(assmts){
    return {
        type: 'SAVE_COMPLETED',
        completed: assmts
    }
}

export function addSub(sub) {
    return {
        type: 'ADD_SUBMISSION',
        submission: sub
    }
}

export function getCompletedAssessments () {
    return dispatch => {
        dispatch(loadingAssmts())
        getUserAssessments()
            .then(assmts => {
                dispatch(saveAllCompleted(assmts))
            })
    }
  }

export function submitEvidence(code, evidence) {
    return dispatch => {
        return saveSubmission(code, evidence)
            .then(record_id => {
                dispatch({type: 'PENDING_ASSESSMENT', code, record_id, evidence})
            })
    }
}
