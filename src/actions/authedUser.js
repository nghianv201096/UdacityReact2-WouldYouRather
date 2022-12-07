export const LOGIN_USER = "LOGIN_USER"

export function loginUser(authedUser) {
    return {
        type: LOGIN_USER,
        authedUser
    }
}