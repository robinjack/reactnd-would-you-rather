import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from "./_DATA";







export function getInitialData() {
    return Promise.all([_getQuestions(), _getUsers()]).then(
        ([questions, users]) => ({
          questions, users
        })
    )
}

export function saveQuestion (question) {
    _saveQuestion(question)
}

export function saveQuestionAnswer(info) {
    _saveQuestionAnswer(info)

}