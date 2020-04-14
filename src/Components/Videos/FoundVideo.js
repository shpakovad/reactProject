import React, {PureComponent} from "react";
import "./Videos.css";

class FoundVideo extends PureComponent {

    render() {

        const {resultValue} = this.props;

        return (<>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                    back to Videos page
                </button>
                <div className="text-resultValue">{resultValue}</div>
            </>
        );
    }
};

export default FoundVideo

