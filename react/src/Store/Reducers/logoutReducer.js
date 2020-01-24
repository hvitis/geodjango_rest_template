var item = localStorage.getItem('login');

const initState = JSON.parse(item);

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DELETE':
            localStorage.removeItem("login");
            return {
                data: action.login,
                    success: true
            }
            case 'CREATE_LGOUT_ERROR':
                return {
                    successMessage: false
                }
                default:
                    return state;
    }
}
export default UsersReducer