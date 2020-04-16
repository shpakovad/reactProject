import {api} from "../../api/videosApi";
import React from "react";

export const POPULAR_VIDEOS_LIST = "api_data/videos/POPULAR-VIDEOS-LIST";


const initialState = {
    popularVideos: null,
};

const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_VIDEOS_LIST: {
            return {
                ...state,
                popularVideos: action.popularVideos,
            }
        }
        default:
            return state
    }
};

export const getPopularVideosListAC = (popularVideos) => {
    return {type: POPULAR_VIDEOS_LIST, popularVideos}
};

export const getPopularVideosListTh = (popularVideos) => {
    return (dispatch) => {
        api.getPopularVideosList()
            .then(res => {
                console.log(res.data.items);
                res.data.items.map(item => {
                    let urlImage = `https://www.youtube.com/embed/${item.id}?controls=2`;
                    let popularVideos = item.snippet.title;
                    return <div className="item-wrapper" key={item.id}>
                        <li className="title-popular-video">
                            <div className="wrapper-title-video"><span> {popularVideos} </span></div>
                            <iframe width="300" height="200" src={urlImage} frameBorder="0" title="myFrame"></iframe>
                        </li>
                    </div>
                });
                dispatch(getPopularVideosListAC(popularVideos))
            })
    }
};

export default videosReducer