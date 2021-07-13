import React, {Component, Fragment} from 'react'
import '../App.css';
import Home from './Home'
import {handleInitialData} from "../actions/shared";
import {connect} from "react-redux";
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./Navigation";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import QuestionPage from "./QuestionPage";
import NotFound from "./NotFound";

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
            (<Fragment>
                <Navigation/>
                <Switch>
                    <Route path={'/add'} component={AddQuestion}/>
                    <Route path={'/questions/:questionId'} component={QuestionPage}/>
                    <Route path={'/leaderboard'} component={Leaderboard}/>
                    <Route path={'/'} exact component={Home}/>
                    <Route component={NotFound}/>
                    <Route path={'/404'} component={NotFound}/>
                </Switch>

            </Fragment>)
        }


    </div>
            </Router>
  )}
}

const mapStateToProps = ({authedUser}) => {
    return {authedUser

    }

}

export default connect(mapStateToProps)(App);
