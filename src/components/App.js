import React, {Component} from 'react'
import '../App.css';
import Home from './Home'
import {handleInitialData} from "../actions/shared";
import {connect} from "react-redux";
import Login from './Login'
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
        console.log("State:", this.props)

    }


    render() {
        const {authedUser} = this.props
        return (
            <Router>
    <div className="App">
        {!authedUser ?
            (<Login/>) :
            (<Home/>)
        }


    </div>
            </Router>
  )}
}

const mapStateToProps = state => {
    return {authedUser: state.authedUser,

    }

}

export default connect(mapStateToProps)(App);
