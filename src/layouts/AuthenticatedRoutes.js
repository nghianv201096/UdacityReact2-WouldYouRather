import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthenticatedRoute = (props) => {
    console.log(props)
    const isAuthenticated = !!props.authedUser
    console.group("Authenticated")
    if(!isAuthenticated) {
        console.log('Unauthenticated, redirect to login')
    } else {
        console.log('Go to component', props)    
    }
    console.groupEnd();
    
    return isAuthenticated 
        ? <main>{props.children}</main> 
        : <Redirect to='/login' />
}

function mapStateToProps(state) {
    return {
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(AuthenticatedRoute)
 