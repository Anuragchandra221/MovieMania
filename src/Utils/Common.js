export const getUser = ()=>{
    const userStr = sessionStorage.getItem("user")
    if (userStr) return JSON.parse(userStr)
    else return null;
}
export const getToken = ()=>{
    return sessionStorage.getItem("request_token") || null
}
export const getSessionid = ()=>{
    return sessionStorage.getItem("session_id") || null
}

export const setUserSession = (token, session, user)=>{
    sessionStorage.setItem("request_token", token)
    sessionStorage.setItem("session_id", session)
    sessionStorage.setItem("user", JSON.stringify(user))
}

export const removeUserSession = ()=>{
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("session_id")
}