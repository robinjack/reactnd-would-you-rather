import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from "./Question";


class QuestionPage extends Component {



    render() {
        return (<div>
            <h3>Would you rather?</h3>

                <Question questionId={this.props.match.params.questionId}
                          showVotes={true}
                />

            {/*
            1. Text of option, number of people who voted
            , percentage of people who voted for that option
            2. Text should be clearly marked if the user voted for that option
            3.

            */}


        </div>)
    }

}


const mapStateToProps = ({users, questions, authedUser}, {questionId}) => {
    return {
        user : users,
        questionId
    }
}


export default connect(mapStateToProps)(QuestionPage)

