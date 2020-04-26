import {api} from "../../api/videosApi";
import React from "react";

export const POPULAR_VIDEOS_LIST = "api_data/videos/POPULAR-VIDEOS-LIST";
export const KEY_VIDEO = "api_data/videos/KEY-VIDEO";


const initialState = {
    popularVideos: [],
    key: ""
};

const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_VIDEOS_LIST: {
            return {
                ...state,
                popularVideos: action.popularVideos,
            }
        }
        case KEY_VIDEO: {
            return {
                ...state,
                key: action.key,
            }
        }
        default:
            return state
    }
};

export const getPopularVideosListAC = (popularVideos) => {
    return {type: POPULAR_VIDEOS_LIST, popularVideos}
};
export const sortedVideoAC = (key) => {
    return {type: KEY_VIDEO, key}
};

export const getPopularVideosListTh = () => {
    return (dispatch) => {
        api.getPopularVideosList()
            .then(res => {
                const popularVideos = res.data.items.map(item => {
                    let urlImage = `https://www.youtube.com/embed/${item.id}?controls=2`;
                    return <div className="item-wrapper" key={item.id} title={item.snippet.title} urlImage={urlImage}
                                views={item.statistics.viewCount} like={item.statistics.likeCount}
                                dislike={item.statistics.dislikeCount}>
                    </div>
                });
                dispatch(getPopularVideosListAC(popularVideos));
            })
    }
};

export default videosReducer