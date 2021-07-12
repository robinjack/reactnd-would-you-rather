import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userScore} from '../utilities/questionUtilities'
import User from "./User";


class Leaderboard extends Component {



    render() {

        const {users} = this.props

        let sortedUsers = Object.values(users).sort(
            (a,b) => {return userScore(b) - userScore(a)}
        )

        return (
            <div>
                <ul>
                    {
                        sortedUsers.map(
                            (user) => (<li key={user.id}><User userId={user.id} score={userScore(user)}/></li>)
                        )
                    }
                </ul>


            </div>

        )
    }

}

const mapStateToProps = ({ users}) => {
    return {
        users
    }
}



export default connect(mapStateToProps)(Leaderboard)