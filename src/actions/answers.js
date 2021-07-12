import {addQuestion, receiveQuestions, removeQuestion} from "./questions";
import {getInitialData, saveQuestion, saveQuestionAnswer} from "../utilities/api";
import {receiveUsers} from "./users";

export const ADD_ANSWER = "ADD_ANSWER"

export function addAnswer (answer) {
    return {type: ADD_ANSWER,
    answer }
}


export function handleAddAnswer(answer) {
    return (dispatch) => {
        dispatch(addAnswer(answer))
        return saveQuestionAnswer(answer)
            .catch (
                (error) => {
                    alert("There was an error: ", error)
                }
            )

    } }