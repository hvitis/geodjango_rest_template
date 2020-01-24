var item = localStorage.getItem('login');

const initState = JSON.parse(item);

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_LOGIN':
            localStorage.setItem("login", action.login);
            return {
                data: action.login,
                    success: true
            }
            case 'CREATE_DELETE':
                localStorage.removeItem("login");
                return localStorage.getItem("login")
            default:
                return state;
    }
}
export default UsersReducer