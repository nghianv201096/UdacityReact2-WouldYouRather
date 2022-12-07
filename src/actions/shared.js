import {getInitialData} from '../utils/api'
import {receiveUsers} from './users'
import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialize() {
    return function(dispatch) {
        getInitialData()
            .then(({users}) => {
                dispatch(showLoading())
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
    }
}