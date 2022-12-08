import { Component } from "react";
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";
import {loginUser} from '../actions/authedUser'
import logo from '../logo.svg';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            authedUser: null,
            toHome: false
        }
    }

    handleChangeUser(value) {
        this.setState({ authedUser: value})
    }

    handleLogin() {
        const {dispatch} = this.props;
        dispatch(loginUser(this.state.authedUser));
        this.setState({
            authedUser: this.props.defaultAuthedUser,
            toHome: true
        })
    }

    componentDidUpdate() {
        const {defaultAuthedUser} = this.props;
        if(!this.state.authedUser && defaultAuthedUser) {
            this.setState({
                authedUser: defaultAuthedUser
            })
        }
    }

    render() {
        if(this.state.toHome === true) {
            return <Redirect to='/questions'></Redirect>;
        } 

        const {users, authedUsers, defaultAuthedUser} = this.props;

        return (
            <div className="card text-center login-form">
                <div className="card-header">
                    <div className="h3">Welcome to the Would You Rather App!</div>
                    <div>Please sign in to continue</div>
                </div>
                <div className="card-body">

                    <img src={logo} className="App-logo" alt="logo" />                
                    <div className="h3 text-success">Sign in</div>

                    {
                        defaultAuthedUser && 
                        <select className="form-select" onChange={(e) => this.handleChangeUser(e.target.value)}>
                            {
                                authedUsers.map(authedUser => <option key={authedUser} value={authedUser}>{users[authedUser].name}</option>)
                            }
                        </select>
                    }
                </div>
                <div className="card-footer">
                    <button className="btn btn-lg btn-success w-100" onClick={(e) => {this.handleLogin()}}>Sign in</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    const authedUsers = Object.keys(users);
    const defaultAuthedUser = authedUsers.length ? authedUsers[0] : null;

    return {
        users,
        authedUsers,
        defaultAuthedUser
    };
}

export default connect(mapStateToProps)(Login)