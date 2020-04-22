import { getUserAssessments } from '../apis/assessments'

export function loadingAssmts() {
    return {
        type: 'LOADING_ALL'
    }
}

export function saveCompleted(assmts){
    return {
        type: 'SAVE_COMPLETED',
        completed: assmts
    }
}

export function getCompletedAssessments () {
    return dispatch => {
        dispatch(loadingAssmts())
        getUserAssessments()
            .then(assmts => {
                dispatch(saveCompleted(assmts))
            })
    }
  }
