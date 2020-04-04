import React, {useState} from 'react';
import style from './Weather.module.css'
import axios from "axios";


export default function Weather () {

    const [name, setName] = useState(undefined);
    const [country, setCountry] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [id, setId] = useState(undefined);
    const [temp, setTemp] = useState(undefined);
    const [feels_like, setFeels_like] = useState(undefined);
    const [speed, setSpeed] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [border, setBorder] = useState(false);

    const gettingWeather = (e) => {
        e.preventDefault();
        const name = e.target.elements.city.value;
        if (name) {
            const API_KEY = 'bcadf81ac18c65d589a0b694bcf27724';
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
                .then((res => {
                    setName(res.data.name);
                    setCountry(res.data.sys.country);
                    setDescription(res.data.weather[0].description);
                    setId(res.data.weather[0].id);
                    setTemp((res.data.main.temp - 273.15).toFixed(0));
                    setFeels_like((res.data.main.feels_like - 273.15).toFixed(0));
                    setSpeed(res.data.wind.speed.toFixed(0));
                    setError(undefined);
                    setBorder(false);
                }))
        } else {
            setName(undefined);
            setCountry(undefined);
            setDescription(undefined);
            setId(undefined);
            setTemp(undefined);
            setFeels_like(undefined);
            setSpeed(undefined);
            setError('Enter the city!');
            setBorder(true)
        }
    };


    const classForError = border === true ? `${style.searchCityInputError}` : `${style.searchCityInput}`;

    const date = new Date();
    const currentDate = date.getFullYear() + '-' + Number(date.getMonth() + 1) + '-' + date.getDate();


    return (

        <div className={style.weatherWrapper}>
            {/*{!this.state.cityDates &&' loading...'}*/}
            {/*{this.state.cityDates && <>*/}
            <div className={style.dateValue}> {currentDate} </div>

            <form onSubmit={gettingWeather} data-test-id="increment">
                <input type='text' className={classForError} placeholder='Enter City...' name='city'/>
                < button className={style.searchCityBtn}><span className={style.textBtn}> Get Weather </span></button>
            </form>
            {name && <>
                <div className={style.wrapperCityDates}>
                    <span className={style.cityName}> {name}, {country} </span>
                    {temp && <>
                        <div className={style.temp}> {temp} °C</div>
                        <div className={style.tempFeels}> feels like: {feels_like} °C</div>
                    </>}

                    <div> {id >= 200 && id <= 232 &&
                    <img src='http://openweathermap.org/img/wn/11d@2x.png' alt=''/>}  </div>
                    <div> {id >= 300 && id <= 321 &&
                    <img src='http://openweathermap.org/img/wn/09d@2x.png' alt=''/>}  </div>
                    <div> {id >= 500 && id <= 504 &&
                    <img src='http://openweathermap.org/img/wn/10d@2x.png' alt=''/>}  </div>
                    <div> {id === 511 &&
                    <img src='http://openweathermap.org/img/wn/13d@2x.png' alt=''/>}  </div>
                    <div> {id >= 520 && id <= 531 &&
                    <img src='http://openweathermap.org/img/wn/09d@2x.png' alt=''/>}  </div>
                    <div> {id >= 600 && id <= 622 &&
                    <img src='http://openweathermap.org/img/wn/13d@2x.png' alt=''/>}  </div>
                    <div> {id >= 701 && id <= 781 &&
                    <img src='http://openweathermap.org/img/wn/50d@2x.png' alt=''/>}  </div>
                    <div> {id === 800 &&
                    <img src='http://openweathermap.org/img/wn/01d@2x.png' alt=''/>}  </div>
                    <div> {id >= 801 && id <= 804 &&
                    <img src='http://openweathermap.org/img/wn/04d@2x.png' alt=''/>}  </div>
                    <div className={style.description}> {description} </div>
                    <div className={style.description}> {speed && <> wind
                        speed: {speed} m/s </>}</div>
                </div>
                {/*</>*/}
                {/*}*/}
            </>}
            <div className={style.cityName}> {error} </div>
        </div>
    );
};

