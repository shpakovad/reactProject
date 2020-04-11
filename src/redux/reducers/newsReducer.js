import {api} from '../../api/newsApi';

export const RESULTS = "RESULTS";

const initialState = {
    results: [],
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESULTS :
            return {
                ...state,
                results: action.newResults
            };
        default:
            return state
    }
};

export const getResultsAC = (newResults) => {
    return {type: RESULTS, newResults}
};
export const getNews = () => {
    return (dispatch) => {
        api.getResults()
            .then((res => {
                let newResults = res.data.results;
                dispatch(getResultsAC(newResults))
                console.log(res)
            }))
    }
};


export default newsReducer