import newsReducer, {getResultsAC} from "../newsReducer";

it('should add news posts', ()=> {
    let action = getResultsAC([]);
    let state = {
        results: [],
    };
    let newState=newsReducer(state, action);
    expect(newState.results.length).not.toBeNull()

});