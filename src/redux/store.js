import {applyMiddleware, combineReducers, createStore} from 'redux';
import newsReducer from './reducers/newsReducer';
import thunkMiddleware from 'redux-thunk';
import videosReducer from "./reducers/videosReducer";

const rootReducer = combineReducers({
    news: newsReducer,
    videos:videosReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;
