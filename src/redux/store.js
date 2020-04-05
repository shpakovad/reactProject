import {applyMiddleware, combineReducers, createStore} from 'redux';
import newsReducer from "./reducers/newsReducer";
import thunkMiddleware from "redux-thunk"

const rootReducer = combineReducers({
    newsReducer: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;
