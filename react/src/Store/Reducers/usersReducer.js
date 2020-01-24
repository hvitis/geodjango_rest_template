var item = localStorage.getItem('user');
            
const initState = JSON.parse(item);

const UsersReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_USER' :                   
            localStorage.setItem("user", action.user);
            return JSON.parse(localStorage.getItem('user'));            
        case 'CREATE_USER_ERROR' :
        return {            
            successMessage: false
        }
        default:
        return state;
    }
}
export default UsersReducer