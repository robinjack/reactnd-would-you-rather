import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navigation from './Navigation'
import Question from "./Question";



class Home extends Component {

    render() {
        return (
            <div>
            <div className={'topnav'}>
            <Navigation/>
            </div>
            <div>
                <h3 className={'answerType'}>Unanswered / Answered</h3>


            </div>
                <ul>
                {
                    Object.keys(this.props.questions).map(
                        (questionId) => (<li key={questionId}><Question questionId={questionId}/></li>)
                    )
                }
                </ul>

            </div>)
    }

}

const mapStateToProps = ({questions}) => {
    return {
        questions: questions
    }
}


export default connect(mapStateToProps)(Home)