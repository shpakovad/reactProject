import {api} from "../../api/videosApi";
import React from "react";

export const FOUND_VIDEOS_LIST = "api_data/found-videos/FOUND-VIDEOS-LIST";


const initialState = {
    foundVideos: "",
};

const foundVideosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOUND_VIDEOS_LIST: {
            return {
                ...state,
                foundVideos: action.foundVideos,
            }
        }
        default:
            return state
    }
};

export const getFoundVideosListAC = (foundVideos) => {
    return {type: FOUND_VIDEOS_LIST, foundVideos}
};

// export const getPopularVideosListTh = (popularVideos) => {
//     return (dispatch) => {
//         api.getPopularVideosList()
//             .then(res => {
//                 console.log(res.data.items);
//                 res.data.items.map(item => {
//                     let urlImage = `https://www.youtube.com/embed/${item.id}?controls=2`;
//                     let popularVideos = item.snippet.title;
//                     return <div className="item-wrapper" key={item.id}>
//                         <li className="title-popular-video">
//                             <div className="wrapper-title-video"><span> {popularVideos} </span></div>
//                             <iframe width="300" height="200" src={urlImage} frameBorder="0" title="myFrame"></iframe>
//                         </li>
//                     </div>
//                 });
//                 dispatch(getPopularVideosListAC(popularVideos))
//             })
//     }
// };

export default foundVideosReducer