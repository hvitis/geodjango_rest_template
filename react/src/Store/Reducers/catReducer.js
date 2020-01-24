import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].category
}
const catReducer = (state = initState, action) => {
    return state;  
}
export default catReducer;