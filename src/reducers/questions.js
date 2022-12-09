import { CREATE_QUESTION_ANSWER, RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = {}, action){
    console.log('In question reducer', action)
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                      ...state[action.qid][action.answer],
                      votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case CREATE_QUESTION_ANSWER:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state;
    }
}