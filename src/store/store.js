import { createStore, combineReducers,applyMiddleware } from 'redux';
// import { addIdToProduct } from './MiddleWare/cruds';
import candyReducer from './reducers/candy';
const reducer = combineReducers({candyReducer});

const store = createStore(reducer);
window.store = store;
export default store;