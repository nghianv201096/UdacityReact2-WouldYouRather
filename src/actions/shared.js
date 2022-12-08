import {getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import {showLoading, hideLoading} from 'react-redux-loading'
import { receiveQuestions } from './questions'

export function handleInitialize() {
    return function(dispatch) {
        getInitialData()
            .then(({users, questions}) => {
                dispatch(showLoading())
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}