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
            const {authedUser} = action.author
            const {users} = state.users
            const {formattedQuestion} = action.formattedQuestion

            return {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
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