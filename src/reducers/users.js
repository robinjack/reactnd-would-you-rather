import {RECEIVE_USERS} from "../actions/users";
import {ADD_ANSWER} from "../actions/answers";
import {ADD_QUESTION} from "../actions/questions";

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
            ...state,
                ...action.users}

        case ADD_QUESTION: {
            console.log("ACtion: ", action)
            const {author, formattedQuestion } = action.question
            const users = state

            return {
                ...users,
                [author]: {
                    ...users[author],
                    questions: users[author].questions.concat([formattedQuestion.id])
                }
            }
        }

        case ADD_ANSWER:
        {const users = state
         const {authedUser, qid, answer} = action.answer
            return {
        ...users,
                [authedUser]: {
            ...users[authedUser],
                    answers: {
                ...users[authedUser].answers,
                        [qid]: answer
                }
            }
        }
        }


        default : return state
    }

}