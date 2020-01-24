import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].blog
}
const blogReducer = (state = initState, action) => {
    return state;  
}
export default blogReducer;