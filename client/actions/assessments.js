import { getUserAssessments, saveSubmission } from '../apis/assessments'
import { showError } from './error'

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
            .then(assmts => dispatch(saveAllCompleted(assmts)))
            .catch(err => dispatch(showError(err.message)))
    }
  }

export function submitEvidence(code, evidence) {
    return dispatch => {
        return saveSubmission(code, evidence)
            .then(record_id => dispatch({type: 'PENDING_ASSESSMENT', code, record_id, evidence}))
            .catch(err => dispatch(showError(err.message)))
    }
}
