import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].client
}
const clientReducer = (state = initState, action) => {
    return state;  
}
export default clientReducer;