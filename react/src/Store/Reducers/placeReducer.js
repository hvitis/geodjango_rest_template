import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].place
}
const placeReducer = (state = initState, action) => {
    return state;  
}
export default placeReducer;