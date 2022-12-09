import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from './_DATA'

export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions   
    }))
}

export function saveQuestionAnswer(questionAnswer) {
    return _saveQuestionAnswer(questionAnswer)
}

export function createQuestion(question) {
    return _saveQuestion(question);
}