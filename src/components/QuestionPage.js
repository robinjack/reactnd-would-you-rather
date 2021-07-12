import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from "./Question";
import {Redirect} from 'react-router-dom'


class QuestionPage extends Component {



    render() {
        console.log("PROPS: ", this.props.matc)
        return (<div>
            <h3>Would you rather?</h3>
            {
                this.props.questions[this.props.match.params.questionId]?
                (<Question questionId={this.props.match.params.questionId}
                          showVotes={true}
                />) : <Redirect to={'/404'}/>
            }
            {/*
            1. Text of option, number of people who voted
            , percentage of people who voted for that option
            2. Text should be clearly marked if the user voted for that option
            3.

            */}


        </div>)
    }

}


const mapStateToProps = ({users, questions, authedUser}, {}) => {
    return {
        user : users,
        questions
    }
}


export default connect(mapStateToProps)(QuestionPage)

