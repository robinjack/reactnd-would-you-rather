import {NavLink} from "react-router-dom";
import React, {Component} from 'react'





class Navigation extends Component {

    render () {
        return (<nav className={'nav'}>
            <ul>
                <li>
                    <NavLink to={'/'} exact activeClassName={'active'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/question'} exact activeClassName={'active'}>
                        Questions
                    </NavLink>

                </li>
                <li>
                    <NavLink to={'/leaderboard'} exact activeClassName={'active'}>
                        Leaderboard
                    </NavLink>

                </li>
                <li>
                    <NavLink to={'/logout'} exact activeClassName={'active'}>
                        Logout
                    </NavLink>

                </li>
            </ul>
        </nav>)

    }

}



export default Navigation


