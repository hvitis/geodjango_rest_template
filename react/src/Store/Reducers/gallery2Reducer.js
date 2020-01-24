import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].gallery2
}
const gallery2Reducer = (state = initState, action) => {
    return state;  
}
export default gallery2Reducer;