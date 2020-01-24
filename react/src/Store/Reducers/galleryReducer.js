import initState1 from '../../softdata.json';
const initState = {
    ...initState1[0].gallery
}
const galleryReducer = (state = initState, action) => {
    return state;  
}
export default galleryReducer;