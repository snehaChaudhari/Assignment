import { createStore, combineReducers } from "redux";
import mainScreenReducer from './Reducer/MainScreenReducerReducer';

const rootReducer = combineReducers({
    mainScreen: mainScreenReducer
})
const configureStore = () =>{
    return createStore(rootReducer);
}
export default configureStore;