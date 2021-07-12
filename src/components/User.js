import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userScore} from "../utilities/questionUtilities";


class User extends Component {



    render() {
        const {user} = this.props
        return (<div className={'question'}>
            <img className={'avatar'} src={user.avatarURL}/>
            <p style={{'fontWeight' : this.props.authedUser === user.id ? 'bold' : 'normal'}}>{user.name}</p>
            <div className={'question-icons'}>
                    <div className={'score'}> {userScore(user)} </div>
            </div>
        </div>)
    }
}






const mapStateToProps = ({users}, {userId}) =>{
    return {
        user: users[userId]
    }
}

export default connect(mapStateToProps)(User)