import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";
import {Redirect} from 'react-router-dom'


class Login extends Component {

    constructor(props) {
        super(props)
    }


    onSubmit = (e) => {
        const {dispatch, redirectURL} = this.props
        dispatch(setAuthedUser(e.target.value))
        if(redirectURL) {
            this.props.history.push(redirectURL)
        }

    }

    render() {
        const {users} = this.props
        return (<div>
            <h3>Login to Would You Rather</h3>
            <select onChange={this.onSubmit} id={'authedUser'} defaultValue={'no-select'} value={'no-select'}>
                <option key={'no-select'} > -- select an option -- </option>
                {Object.values(users).map((user) => {
                    return (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    )
                })}
            </select>

        </div>)
    }

}

const mapStateToProps = ({users}, {redirectURL}) => {
    return {users, redirectURL}
}

export default connect(mapStateToProps)(Login)