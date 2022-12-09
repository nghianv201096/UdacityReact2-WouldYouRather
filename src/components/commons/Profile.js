import { connect } from "react-redux"
import { logoutAction } from "../../actions/authedUser"
import {useHistory} from 'react-router-dom'

const Profile = (props) => {
    const {currentUser, dispatch} = props
    const history = useHistory()

    function handleLogout() {
        dispatch(logoutAction())
        history.push('/login')
    }
    
    return (
        currentUser &&
        <div style={{display: 'flex'}}>
            <div className="mr-4">
                Hello, <span>{currentUser.name}</span>
            </div>
            <img className="avatar avatar-sm mr-4" src={currentUser.avatarURL} alt="avatar"></img>
            <div>
                <span style={{cursor: 'pointer'}} onClick={handleLogout}>Logout</span>
            </div>
        </div>
    )
}

function mapStateToProps({users, authedUser}) {
    return {
        currentUser: authedUser ? users[authedUser] : null
    }
}
export default connect(mapStateToProps)(Profile)