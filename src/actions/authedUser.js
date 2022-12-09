export const LOGIN_USER = "LOGIN_USER"
export function loginUser(authedUser) {
    return {
        type: LOGIN_USER,
        authedUser
    }
}

export const LOG_OUT = "LOG_OUT"
export function logoutAction() {
    return {
        type: LOG_OUT
    }
}