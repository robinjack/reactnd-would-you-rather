import React, {Component} from 'react'
import {connect} from 'react-redux'



class Question extends Component {

    render() {
        console.log("Questions props: ", this.props)
        const {user, question} = this.props
        return (<div className={'questionContainer'}>
            <img src={user.avatarURL}/>
            <p>{user.name}</p>
            <span> {question.optionOne.text}</span>
            <span> {question.optionTwo.text}</span>
        </div>)
    }

}

const mapStateToProps = ({users, questions, authedUser}, {questionId}) => {
    return {
        question: questions[questionId],
        user: users[questions[questionId].author]
    }
}

export default connect(mapStateToProps)(Question)