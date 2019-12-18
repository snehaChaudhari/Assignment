import { IS_LOADING_CONST } from '../Constant'

const initialState = {
    isLoading: true,
}
const loginReducer = (state = initialState, action) => {
    // console.warn(action.type+"--"+action.payload)
    switch(action.type){
        case IS_LOADING_CONST:
            return{
                ...state,
                isLoading: action.payload
            }
            
        default:
        return state;
    }
}

export default loginReducer;