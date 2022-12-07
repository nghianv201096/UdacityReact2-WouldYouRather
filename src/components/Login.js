import { Component } from "react";
import {connect} from 'react-redux'

class Login extends Component {
    handleLogin(authedUser) {
        console.log('Login', authedUser)
    }

    render() {
        const users = this.props.users || {};
        const authedUsers = Object.keys(users);

        return (
            <div className="m offset-2 col-8 card text-center mt-4">
                <div className="card-header">
                    <div className="h2">Welcome to the Would You Rather App!</div>
                    <div>Please sign in to continue</div>
                </div>
                <div className="card-body">
                    
                    <div className="h2">Sign in</div>

                    <select className="form-select" onChange={(e) => {this.handleLogin(e.target.value)}}>
                        {
                            authedUsers.map(authedUser => <option key={authedUser} value={authedUser}>{users[authedUser].name}</option>)
                        }
                    </select>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    };
}

export default connect(mapStateToProps)(Login)