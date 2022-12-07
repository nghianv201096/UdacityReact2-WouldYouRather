import { Component, Fragment } from 'react';
import {Routes, Route, redirect} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Nav from './Nav'
import NotFound from './NotFound'
import {handleInitialize} from '../actions/shared'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    const {loading, dispatch} = this.props;
    dispatch(handleInitialize())
  }
  
  render () {
    return (
      <Fragment>
        <Nav />

        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Fragment>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authenticated: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App);
