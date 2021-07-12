import {NavLink, Link} from "react-router-dom";
import React, {Component} from 'react'
import {logoutAuthedUser} from '../actions/authedUser'
import {connect} from "react-redux";

class Navigation extends Component {

    logout = () => {
        this.props.dispatch(logoutAuthedUser())
    }
    render () {
        return (<nav className={'nav'}>
            <ul>
                <li>
                    <NavLink to={'/'} exact activeClassName={'active'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/add'} exact activeClassName={'active'}>
                        Add Question
                    </NavLink>

                </li>
                <li>
                    <NavLink to={'/leaderboard'} exact activeClassName={'active'}>
                        Leaderboard
                    </NavLink>

                </li>
                <li>
                    Hello {this.props.name}
                </li>
                <li>
                    <Link to={'/'}
                    onClick={this.logout}
                    >
                        Logout
                    </Link>

                </li>
            </ul>
        </nav>)

    }

}

const mapStateToProps = ({users, authedUser}) => {
    return {name: users[authedUser].name}
}

export default connect(mapStateToProps)(Navigation)


