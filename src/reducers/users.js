import { RECEIVE_USERS } from "../actions/users";
import {SAVE_QUESTION_ANSWER} from "../actions/questions"

export default function user(state = {}, action) {
    console.log('In user reducer', action)
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                      ...state[action.authedUser].answers,
                      [action.qid]: action.answer
                    }
                  }
            }
        default:
            return state
    }
} 