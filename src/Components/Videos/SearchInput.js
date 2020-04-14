import React, {PureComponent} from "react";
import "./Videos.css";
import {NavLink} from "react-router-dom";

class SearchInput extends PureComponent {

    render() {

        const {onChangedValue, onKeyPress, addValue, addedValue} = this.props;

        return (
            <div className="input-group mb-3 search-input">
                <input type="text" className="form-control" aria-describedby="button-addon2"
                       onChange={onChangedValue}
                       onKeyPress={onKeyPress} value={addedValue}/>
                <div className="input-group-append">
                    <NavLink to={"/videos/found"} className="btn btn-outline-secondary" type="button" id="button-addon2"
                            onClick={addValue}> Search </NavLink>
                </div>
            </div>
        )
    }
};

export default SearchInput

