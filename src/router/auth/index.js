export const isUserAuthorized = (nextState, replace) => {
    const isUser = localStorage.getItem('user')
    
    if (isUser) {
        return true
    } else {            
        return false
    }
}