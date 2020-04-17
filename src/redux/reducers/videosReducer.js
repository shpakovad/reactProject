import {api} from "../../api/videosApi";
import React from "react";

export const POPULAR_VIDEOS_LIST = "api_data/videos/POPULAR-VIDEOS-LIST";


const initialState = {
    popularVideos: [],
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

export const getPopularVideosListTh = () => {
    return (dispatch) => {
        api.getPopularVideosList()
            .then(res => {
                console.log(res.data.items);
                const popularVideos = res.data.items.map(item => {
                    let urlImage = `https://www.youtube.com/embed/${item.id}?controls=2`;
                    return <div className="item-wrapper" key={item.id}>
                        <li className="title-popular-video">
                            <div className="wrapper-title-video"><span> {item.snippet.title} </span></div>
                            <iframe width="300" height="200" src={urlImage} frameBorder="0" title="myFrame"></iframe>
                            <div className="views"> views: {item.statistics.viewCount} </div>
                            <div className="statistics">
                                <div> like: {item.statistics.likeCount}  </div>
                              <div> dislike: {item.statistics.dislikeCount}  </div>
                            </div>
                        </li>
                    </div>
                });
                dispatch(getPopularVideosListAC(popularVideos));
            })
    }
};

export default videosReducer