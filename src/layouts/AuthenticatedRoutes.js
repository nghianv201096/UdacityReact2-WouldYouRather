import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthenticatedRoute = (props) => {
    const isAuthenticated = !!props.authedUser
    
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
 