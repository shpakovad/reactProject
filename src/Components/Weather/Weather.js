import React, {Component} from 'react';
import style from './Weather.module.css'
import axios from "axios";


class Weather extends Component {

    state = {
        name: undefined,
        country: undefined,
        description: undefined,
        id: undefined,
        icon: undefined,
        temp: undefined,
        feels_like: undefined,
        speed: undefined,
        error: undefined,
        border: false
    };

    gettingWeather = (e) => {

        e.preventDefault();
        let name = e.target.elements.city.value;
        if (name) {
            let API_KEY = 'bcadf81ac18c65d589a0b694bcf27724';
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
                .then((res => {

                    this.setState({
                        name: res.data.name,
                        country: res.data.sys.country,
                        description: res.data.weather[0].description,
                        id: res.data.weather[0].id,
                        temp: (res.data.main.temp - 273.15).toFixed(0),
                        feels_like: (res.data.main.feels_like - 273.15).toFixed(0),
                        speed: res.data.wind.speed.toFixed(0),
                        error: undefined,
                        border: false
                    });
                    console.log(res.data)
                }))
        } else {
            this.setState({
                name: undefined,
                country: undefined,
                description: undefined,
                id: undefined,
                temp: undefined,
                feels_like: undefined,
                speed: undefined,
                error: 'Enter the city!',
                border: true
            })
        }

    };


    render() {

        const classForError = this.state.border === true ? `${style.searchCityInputError}` : `${style.searchCityInput}`

        const date = new Date();
        const currentDate = date.getFullYear() + '-' + Number(date.getMonth() + 1) + '-' + date.getDate();
        const time = date.getHours() + ':' + date.getMinutes();

        return (

            <div className={style.weatherWrapper}>
                {/*{!this.state.cityDates &&' loading...'}*/}
                {/*{this.state.cityDates && <>*/}
                <div className={style.dateValue}> {currentDate} </div>
                <div className={style.timeValue}> {time} </div>

                <form onSubmit={this.gettingWeather}>
                    <input type='text' className={classForError} placeholder='Enter City...' name='city'/>
                    < button className={style.searchCityBtn}>Get Weather</button>
                </form>
                {this.state.name && <>
                    <div className={style.wrapperCityDates}>
                        <span className={style.cityName}> {this.state.name} {this.state.country} </span>
                        {this.state.temp && <>
                            <div className={style.temp}> {this.state.temp} °C</div>
                            <div className={style.tempFeels}> feels like: {this.state.feels_like} °C</div>
                        </>}

                        <div> {this.state.id >= 200 && this.state.id <= 232 &&
                        <img src='http://openweathermap.org/img/wn/11d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id >= 300 && this.state.id <= 321 &&
                        <img src='http://openweathermap.org/img/wn/09d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id >= 500 && this.state.id <= 504 &&
                        <img src='http://openweathermap.org/img/wn/10d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id === 511 &&
                        <img src='http://openweathermap.org/img/wn/13d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id >= 520 && this.state.id <= 531 &&
                        <img src='http://openweathermap.org/img/wn/09d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id >= 600 && this.state.id <= 622 &&
                        <img src='http://openweathermap.org/img/wn/13d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id >= 701 && this.state.id <= 781 &&
                        <img src='http://openweathermap.org/img/wn/50d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id === 800 &&
                        <img src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>}  </div>
                        <div> {this.state.id >= 801 && this.state.id <= 804 &&
                        <img src='http://openweathermap.org/img/wn/04d@2x.png' alt=''/>}  </div>
                        <div className={style.description}> {this.state.description} </div>
                        <div className={style.description}> {this.state.speed && <> wind
                            speed: {this.state.speed} m/s </>}</div>
                    </div>
                    {/*</>*/}
                    {/*}*/}
                </>}
                <div className={style.cityName}> {this.state.error} </div>
            </div>
        );
    }
}

export default Weather;
