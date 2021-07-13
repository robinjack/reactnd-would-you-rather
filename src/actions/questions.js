import {getInitialData, saveQuestion} from "../utilities/api";
import {receiveUsers} from "./users";

export const ADD_QUESTION = "ADD_QUESTION"
export const REMOVE_QUESTION="REMOVE_QUESTION"
export const RECEIVE_QUESTIONS="RECEIVE_QUESTIONS"



export function receiveQuestions(questions) {
    return {type: RECEIVE_QUESTIONS,
    questions}
}

export function addQuestion (info) {
    return {
        type : ADD_QUESTION,
        question : info
    }
}

export function removeQuestion (questionId) {
    return {
        type : REMOVE_QUESTION,
        questionId
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question).then(
            (formattedQuestion) => {
                dispatch(addQuestion({...question, formattedQuestion}))
            }
        )
        //     .catch (
        //     (error) => {
        //         alert("There was an error: ", error)
        //     }
        // )

} }