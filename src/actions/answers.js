export const ADD_ANSWER = "ADD_ANSWER"





export function addAnswer (answer) {
    return {type: ADD_ANSWER,
    answer }
}