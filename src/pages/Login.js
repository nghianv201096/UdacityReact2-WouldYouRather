import { Component } from "react";
import {connect} from 'react-redux'
import { Redirect } from "react-router-dom";
import {loginUser} from '../actions/authedUser'
import logo from '../logo.svg';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            authedUser: this.props.defaultAuthedUser,
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

    render() {
        if(this.state.toHome === true) {
            return <Redirect to='/'></Redirect>;
        } 

        const users = this.props.users || []

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
                        <select value={this.state.authedUser} className="form-select" onChange={(e) => this.handleChangeUser(e.target.value)}>
                            {
                                users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
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

function mapStateToProps(state) {
    const users = Object.values(state.users) || []
    const defaultAuthedUser = users.length ? users[0].id : '';

    return {
        users,
        defaultAuthedUser
    };
}

export default connect(mapStateToProps)(Login)