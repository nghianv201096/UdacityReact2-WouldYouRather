import { LOGIN_USER, LOG_OUT } from "../actions/authedUser";

export default function authedUser(state = null, action) {
    switch (action.type) {
        case LOGIN_USER:
            return action.authedUser
        case LOG_OUT:
            return null
        default:
            return state
    }
} 