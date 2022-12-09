import { createQuestion, saveQuestionAnswer } from "../utils/api"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const CREATE_QUESTION_ANSWER = 'CREATE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function questionAnswer(authedUser, qid, answer) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveQuestionAnswer(authedUser, qid, answer) {
    return (dispatch) => {
        saveQuestionAnswer({authedUser, qid, answer})
            .then((rs) => {
                dispatch(questionAnswer(authedUser, qid, answer))
            })
            .catch((e) => {
                console.warn('Error in handleSaveQuestionAnswer')
            })
    }
}

export function createQuestionAction(question) {
    return {
        type: CREATE_QUESTION_ANSWER,
        question
    }
}

export function handleCreateQuestion(optionOneText, optionTwoText, author, cb) {
    return (dispatch) => {
        createQuestion({optionOneText, optionTwoText, author})
            .then(question => {
                dispatch(createQuestionAction(question))
                if(cb) {
                    cb(question)
                }
            })
            .catch((e) => {
                console.warn('Error in handleCreateQuestion')
            })
    }
}