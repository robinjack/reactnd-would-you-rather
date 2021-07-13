import {RECEIVE_QUESTIONS, ADD_QUESTION} from "../actions/questions";
import {ADD_ANSWER} from "../actions/answers";

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION: {
            return {
                ...state,
                [action.question.formattedQuestion.id] : action.question.formattedQuestion

            }

        }
        case ADD_ANSWER:
            {  const questions = state
                const {authedUser, qid, answer} = action.answer
                return {
                    ...questions,
                    [qid]: {
                        ...questions[qid],
                        [answer]: {
                            ...questions[qid][answer],
                            votes: questions[qid][answer].votes.concat([authedUser])
                        }
                    }
                }

            }

        default : return state
    }

}