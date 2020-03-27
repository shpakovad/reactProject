import React, {Component} from 'react';
import Weather from "./Components/Weather/Weather";
import './App.css'
import {NavLink, Route} from "react-router-dom";
import News from "./Components/News/News";

class App extends Component {


    render() {
        return (
            <div className="App">
                <header className='header'>
                    <div className='wrapperHeader'>
                        <NavLink to='/weather'> Weather </NavLink>
                        <NavLink to='/news'> News </NavLink>
                    </div>
                </header>
                <div>
                    <Route path='/weather' render={() => <Weather />} />
                    <Route path='/news' render={() => <News />} />
                </div>
            </div>
        );
    }
}

export default App;
