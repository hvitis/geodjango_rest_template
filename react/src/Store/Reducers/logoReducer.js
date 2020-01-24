import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].logo
}
const logoReducer = (state = initState, action) => {
    return state;  
}
export default logoReducer;