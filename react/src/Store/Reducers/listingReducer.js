import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].listing
}
const listingReducer = (state = initState, action) => {
    return state;  
}
export default listingReducer;