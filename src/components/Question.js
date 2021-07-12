import React, {Component} from 'react'
import {connect} from 'react-redux'
import authedUser from "../reducers/authedUser";
import {Link} from "react-router-dom";
import {questionScore, formatPercentage} from "../utilities/questionUtilities";
import {handleAddAnswer} from "../actions/answers";


class Question extends Component {

    state = {
        showVotes : false,
        userHasVoted : false
    }

    numPeopleVotedForOption = (question, option) => {
        return question[option].votes.length
    }

    userHasVoted = () => {
        let voted = this.props.authedUserAnswerIDs.filter((q) => q===this.props.question.id).length > 0
        return voted
    }

    optionVoted = (option) => {
        return this.props.question[option].votes.filter((a) => a === this.props.authedUser).length > 0
    }

    handleVote = (option) => {
        return (e) => {
            console.log("PROPS OF VOTING: ", this.props)
        e.preventDefault()
            const {questionId, authedUser, dispatch} = this.props

            dispatch(handleAddAnswer(
                { authedUser, qid: questionId, answer: option }
            ))
            this.setState({showVotes : true,
            userHasVoted: true
            })
    }
    }




    render() {
        const {user, question} = this.props
        return (<Link to={`/question/${question.id}`} className={'question'}>
            <img className={'avatar'} src={user.avatarURL}/>
            <p style={{'fontWeight' : this.props.authedUser === user.id ? 'bold' : 'normal'}}>{user.name}</p>
            <div className={'question-icons'}>
                {
                    !this.props.showVotes?

                        (<div><div className={'btn'}> {question.optionOne.text}</div>
                    <div className={'btn'} > {question.optionTwo.text}</div> {!this.props.score ? null :
                        <div className={'score'}> {this.props.score} </div>

                    } </div> ) :

                    this.state.showVotes && this.userHasVoted()?

                    <div><div>
                        <div className={'btn'} style={{fontWeight: this.optionVoted('optionOne')? 'bold' : 'normal' }} > {question.optionOne.text}</div>
                        <div className={'numvoted'}> {this.numPeopleVotedForOption(question, 'optionOne')} </div>
                        <div className={'percentvoted'}> {formatPercentage(this.numPeopleVotedForOption(question, 'optionOne')
                            / questionScore(question))}
                        </div>
                    </div>
                        <div className={'btn'} style={{fontWeight: this.optionVoted('optionTwo')? 'bold' : 'normal' }}> {question.optionTwo.text}</div>
                        <div className={'numvoted'}> {this.numPeopleVotedForOption(question, 'optionTwo')} </div>
                        <div className={'percentvoted'}> {formatPercentage(this.numPeopleVotedForOption(question, 'optionTwo')
                            / questionScore(question))}
                        </div>

                    </div> : <div><button className={'btn'} onClick={this.handleVote('optionOne')}> {question.optionOne.text}</button>
                            <button className={'btn'} onClick={this.handleVote('optionTwo')}> {question.optionTwo.text}</button> {!this.props.score ? null :
                            <div className={'score'}> {this.props.score} </div>

                            } </div>
                        }

                    </div>

        </Link>)
    }

}

const mapStateToProps = ({users, questions, authedUser}, {questionId, score, showVotes}) => {

    return {
        question: questions[questionId],
        user: users[questions[questionId].author],
        authedUser,
        authedUserAnswerIDs : Object.keys(users[authedUser].answers),
        score,
        showVotes
    }
}

export default connect(mapStateToProps)(Question)