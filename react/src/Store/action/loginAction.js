
export const LogInAc = data => { 
    var login = JSON.stringify(data)
    return (dispatch, getState) => {  
        dispatch( {
            type: 'CREATE_LOGIN',  
            login
        })
        return Promise.resolve()
    }
   
}