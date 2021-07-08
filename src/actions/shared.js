import {getInitialData} from '../utilities/api'
import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {hideLoading, showLoading} from "react-redux-loading-bar";
import {setAuthedUser} from "./authedUser";

export const testAuthedUser = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(testAuthedUser))
            dispatch(hideLoading())
        })




    }

}