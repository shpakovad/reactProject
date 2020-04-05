import React, {Component} from 'react';
import Weather from "./Components/Weather/Weather";
import './App.css'
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import News from "./Components/News/News";
import {Provider} from "react-redux";
import store from "./redux/store";

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
                    <Route path='/weather' render={() => <Weather/>}/>
                    <Route path='/news' render={() => <News/>}/>
                </div>
            </div>
        );
    }
}

// export default App;
const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
};

export default MainApp
