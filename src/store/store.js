import { createStore, combineReducers,applyMiddleware } from 'redux';
import {addCandy,getAllCandy,editCandy} from './middle-ware/crud'
// import { addIdToProduct } from './MiddleWare/cruds';
import candyReducer from './reducers/candy';
const reducer = combineReducers({candyReducer});

const store = createStore(reducer,applyMiddleware(addCandy,getAllCandy,editCandy));
window.store = store;
export default store;
store.dispatch({type:'getAllCandy'});