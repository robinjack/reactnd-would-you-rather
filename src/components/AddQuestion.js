import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from "../actions/questions";


class AddQuestion extends Component {

    state = {optionOne: "",
    optionTwo: ""
    }

    onSubmit = (e) => {
        e.preventDefault()
        const optionOneText = this.state.optionOne
        const optionTwoText = this.state.optionTwo
        if(optionOneText.length > 0 && optionTwoText.length > 0)
        {

            this.props.dispatch(handleAddQuestion({ optionOneText,
                optionTwoText, author: this.props.authedUser }))
        }

        this.setState({optionOne: "",
        optionTwo : ""
        })

    }

    onChangeHandler = (option) => {
        return (e) => {
            e.preventDefault()
            const text = e.target.value
            this.setState({[option]  : text})

            }
        }


    render() {
        return (<div>
            <h3>Add Question</h3>
            <form onSubmit={this.onSubmit}>
                <textarea placeholder={'Option One'}
                          value={this.state.optionOne}
                          onChange={this.onChangeHandler('optionOne')}/>
                <textarea placeholder={'Option Two'}
                          value={this.state.optionTwo}
                            onChange={this.onChangeHandler('optionTwo')}
                />
                <button className={'btn'}> Submit </button>
            </form>

        </div>)
    }

}

const mapStateToProps = ({authedUser}) => {

    return {authedUser}
}

export default connect(mapStateToProps)(AddQuestion)