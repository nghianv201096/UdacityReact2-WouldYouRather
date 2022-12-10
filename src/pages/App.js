import { Component, Fragment } from 'react';
import {Route, Switch} from 'react-router-dom'
import {handleInitialize} from '../actions/shared'
import Layout from '../layouts/Layout'
import AuthenticatedRoute from '../layouts/AuthenticatedRoutes'
import Login from './Login'
import HomePage from './HomePage'
import QuestionPage from './QuestionPage';
import LeaderBoardPage from './LeaderBoardPage';
import UserPage from './UserPage'
import NotFound from './NotFound'
import { connect } from 'react-redux';
import QuestionNew from '../components/questions/QuestionNew';

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
              <Route path='/login'>
                <Login />
              </Route>
              <AuthenticatedRoute>
                <Route path='/' exact>
                  <HomePage/>
                </Route>
                <Route path='/questions/:id'>
                  <QuestionPage />
                </Route>
                <Route path='/add-question'>
                  <QuestionNew />
                </Route>
                <Route path='/leaderboard'>
                  <LeaderBoardPage />
                </Route>
                <Route path='/add-user'>
                  <UserPage />
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
