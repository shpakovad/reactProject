import React, {PureComponent} from "react";
import "./Videos.css";;

class FoundVideo extends PureComponent {

    render() {

        const {resultValue} = this.props;

        return (<div className="text-resultValue">{resultValue}</div>
        );
    }
};

export default  (FoundVideo)

