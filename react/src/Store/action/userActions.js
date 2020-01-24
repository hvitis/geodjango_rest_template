export const SignUp = data => { 
    var user = JSON.stringify(data)
    return (dispatch, getState) => {  
        dispatch( {
            type: 'CREATE_USER',  
            user
        })
        return Promise.resolve()
    }   
}