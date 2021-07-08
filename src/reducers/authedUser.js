import {LOGOUT_AUTHED_USER, SET_AUTHED_USER} from "../actions/authedUser";


export default function authedUser (state = "", action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                authedUser : action.authedUser

            }

        default : return state
    }

}