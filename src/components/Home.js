import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navigation from './Navigation'
import Question from "./Question";



class Home extends Component {

    state = {
        answered : false
    }

    toggleAnswered = () => {
        this.setState( (prevState) =>({answered : !prevState.answered}))
    }

    render() {
        const {authedUser, questions} = this.props

        return (
            <div>
            <div className={'questionBtnContainer'}>
                <button className={'questionCategoryBtn'}
                    style={{'fontWeight' : this.state.answered ?
                                'bold' : 'normal'
                    }}
                    disabled={!this.state.answered}
                    onClick={this.toggleAnswered}
                >Unanswered</button>
                <button className={'questionCategoryBtn'}
                    style={{'fontWeight' : !this.state.answered ?
                        'bold' : 'normal'

                }} disabled={this.state.answered}
                onClick={this.toggleAnswered}
                > Answered </button>


            </div>
                <ul>
                {

                    Object.values(questions).filter(
                        (question) => {
                            let authedUserAnswered = question.optionOne.votes.concat(question.optionTwo.votes).includes(authedUser)
                            return this.state.answered ? authedUserAnswered : !authedUserAnswered
                        }).sort((a,b) => b.timestamp - a.timestamp).map(
                        (question) => (<li key={question.id}><Question questionId={question.id}/></li>)
                    )
                }
                </ul>

            </div>)
    }

}

const mapStateToProps = ({questions, authedUser}) => {
    return {
        authedUser,
        questions: questions
    }
}


export default connect(mapStateToProps)(Home)