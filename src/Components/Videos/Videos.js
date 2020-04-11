import React from 'react';
import './Videos.css'

export default function Videos() {

    return (<>

    <div className="input-group mb-3 search-input" >
        <input type="text" className="form-control" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
    </div>

        </>
    );
};

