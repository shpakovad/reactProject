import React, {Component} from 'react';
import Weather from "./Components/Weather/Weather";
import './App.css'
import {Route} from "react-router-dom";

class App extends Component {


    render() {
        return (
            <div className="App">
                <header className='header'>
                    <div className='wrapperHeader'>
                        <a href='/weather'> Weather </a>
                    </div>
                </header>
                <div>
                    <Route path='/weather' render={() =>
                        <Weather/>}
                    />
                </div>
            </div>
        );
    }
}

export default App;
