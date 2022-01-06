import React, { useState } from 'react';

import './weather.css'; 

const api = {
    key: '4cbde749291438724a8497dbc0d3ca0f',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function Weather() {

    const [q, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${q}&units=imperial&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(weather);
            });
        }
    }

    const dateBuilder = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${month} ${date} ${year}`
    }

    return(
        <div>
            <main>
                <div className="search-box">
                    <div className='title'>Weather</div>
                    <input
                     type="text" 
                     className="search-bar" 
                     placeholder="City, Country" 
                     onChange={e => setQuery(e.target.value)} 
                     value={q}
                     onKeyPress={search} 
                    />
                </div>
                {(typeof weather.main != 'undefined') ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.name}, {weather.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>  
                    <div className='weather-box'>
                        <div className='temp'>{Math.round(weather.main.temp)}°</div>
                        <div className='weather-text'>{weather.clouds.all} % cloudy</div>
                    </div>
                </div>
                ) : ('')}
            </main>
        </div>
    
    )
}

export default Weather;