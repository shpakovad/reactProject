import React, {Component} from 'react';
import style from './Weather.module.css'
import axios from "axios";


class Weather extends Component {

    state = {
        name: undefined,
        country: undefined,
        description: undefined,
        id: undefined,
        icon: undefined
    };

    gettingWeather = (e) => {
        e.preventDefault();
        let name = e.target.elements.city.value;

        let API_KEY = 'bcadf81ac18c65d589a0b694bcf27724';
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
            .then((res => {
                let cityDates = res.data;
                this.setState({
                    name: res.data.name,
                    country: res.data.sys.country,
                    description: res.data.weather[0].description,
                    id: res.data.weather[0].id
                });
                console.log(cityDates)
            }))
    };

    render() {

        const date = new Date();
        const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        const currentDate = date.getUTCHours()
        return (

            <div className={style.weatherWrapper}>

                {/*{!this.state.cityDates &&' loading...'}*/}
                {/*{this.state.cityDates && <>*/}
                <div> {currentDate} </div>
                <div className={style.timeValue}> {time} </div>

                <form onSubmit={this.gettingWeather}>
                    <input type='text' className={style.searchCityInput} placeholder='Enter City...' name='city'/>
                    < button className={style.searchCityBtn}>Search</button>
                </form>
                <div className={style.wrapperCityDates}>
                    <span className={style.cityName}> {this.state.name} {this.state.country} </span>
                    <div> {this.state.description} </div>
                    <div> {this.state.id >= 200 && this.state.id <= 232 && <img src='http://openweathermap.org/img/wn/11d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id >= 300 && this.state.id <= 321 && <img src='http://openweathermap.org/img/wn/09d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id >= 500 && this.state.id <= 504 && <img src='http://openweathermap.org/img/wn/10d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id === 511 && <img src='http://openweathermap.org/img/wn/13d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id >= 520 && this.state.id <= 531 && <img src='http://openweathermap.org/img/wn/09d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id >= 600 && this.state.id <= 622 && <img src='http://openweathermap.org/img/wn/13d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id >= 701 && this.state.id <= 781 && <img src='http://openweathermap.org/img/wn/50d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id === 800 && <img src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>}  </div>
                    <div> {this.state.id >= 801 && this.state.id <= 804 && <img src='http://openweathermap.org/img/wn/04d@2x.png' alt=''/>}  </div>


                    {/*<div > {(this.state.cityDates.main.temp-273.15).toFixed(0)} °C </div>*/}
                    {/*    <div > feels like: {(this.state.cityDates.main.feels_like-273.15).toFixed(0)} °C </div>*/}
                    {/*    <div > wind speed: {(this.state.cityDates.wind.speed).toFixed(0)} m/s </div>*/}
                </div>
                {/*</>*/}
                {/*}*/}
            </div>

        );
    }
}

export default Weather;
