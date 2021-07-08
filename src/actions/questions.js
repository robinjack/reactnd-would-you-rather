export const ADD_QUESTION = "ADD_QUESTION"
export const REMOVE_QUESTION="REMOVE_QUESTION"
export const RECEIVE_QUESTIONS="RECEIVE_QUESTIONS"

export function receiveQuestions(questions) {
    return {type: RECEIVE_QUESTIONS,
    questions}
}

export function addQuestion (question) {
    return {
        type : ADD_QUESTION,
        question
    }
}

export function removeQuestion (questionId) {
    return {
        type : REMOVE_QUESTION,
        questionId
    }
}