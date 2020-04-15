import React, {PureComponent} from "react";
import "./Videos.css";

class SearchInput extends PureComponent {

    render() {

        const {onChangedValue, addValue, addedValue} = this.props;

        return (
            <div className="input-group mb-3 search-input" >
                <input type="text" className="form-control" aria-describedby="button-addon2"
                       onChange={onChangedValue} value={addedValue}/>
                <div className="input-group-append">
                    <button  className="btn btn-outline-secondary" type="button" id="button-addon2"
                            onClick={addValue} > Search </button>
                </div>
            </div>
        )
    }
};

export default SearchInput

