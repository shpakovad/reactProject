import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Weather from './Components/Weather/Weather';
import './App.css';
import News from './Components/News/News';
import Videos from "./Components/Videos/Videos";


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className="wrapperHeader">
                        <NavLink to="/news"> News </NavLink>
                        <NavLink to="/weather"> Weather </NavLink>
                        <NavLink to="/videos"> Videos </NavLink>
                    </div>
                </header>
                <div>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/weather" render={() => <Weather/>}/>
                    <Route path="/videos" render={() => <Videos/>}/>
                </div>
            </div>
        );
    }
}

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
};
export default MainApp;
