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

export default foundVideosReducer
