import {applyMiddleware, combineReducers, createStore} from 'redux';
import newsReducer from './reducers/newsReducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;
