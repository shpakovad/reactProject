import {applyMiddleware, combineReducers, createStore} from 'redux';
import newsReducer from './reducers/newsReducer';
import thunkMiddleware from 'redux-thunk';
import videosReducer from "./reducers/videosReducer";
import foundVideosReducer from "./reducers/foundVideosReducer";


const rootReducer = combineReducers({
    news: newsReducer,
    videos: videosReducer,
    found_videos: foundVideosReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;
