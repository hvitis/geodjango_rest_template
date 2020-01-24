export const LogOut = data => {

    return (dispatch, getState) => {
        dispatch({
            type: 'CREATE_DELETE',
            login: data
        })
        return Promise.resolve()
    }
}