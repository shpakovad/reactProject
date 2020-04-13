import React, {Component} from 'react';
import './Videos.css';
import './Videos.css';
import {NavLink} from "react-router-dom";

class FoundVideo extends Component {

    render() {

        return (<>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" >
               back to Videos page
            </button>
         <div className="text-resultValue">{this.props.resultValue}</div>
            </>
        );
    }
};

export default FoundVideo

