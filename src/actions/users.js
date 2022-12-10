export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}


export const CREATE_USER = "CREATE_USER"
function createUserAction(user) {
    return {
        type: CREATE_USER,
        user
    }
}

export function handleCreateUser(user) {
    return function(dispatch) {
        console.log('Handle in dispatch')
        // call api
        
            // then dispatch to store
            //dispatch(createUserAction(user))
    }
}