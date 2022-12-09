import { Component, Fragment } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Layout from '../layouts/Layout'
import NotFound from './NotFound'
import {handleInitialize} from '../actions/shared'
import { connect } from 'react-redux';
import Vote from './QuestionPage';
import AuthenticatedRoute from '../layouts/AuthenticatedRoutes'

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(handleInitialize())
  }
  
  render () {
    return (
      <Fragment>
        <Layout>
          <Switch>
              <Route path='/' exact>
                <Redirect to='/questions'></Redirect>
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <AuthenticatedRoute>
                <Route path='/questions' exact>
                    <Home/>
                </Route>
                <Route path='/questions/:id'>
                  <Vote />
                </Route>
              </AuthenticatedRoute>
              <Route path='/not-found'>
                <NotFound />
              </Route>
              <Route path='*' >
                <NotFound />
              </Route>
            </Switch>
        </Layout>
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
