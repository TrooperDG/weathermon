const{name, main: {temp, feels_like, pressure, humidity}, weather : [{icon, description}],wind: {speed}} = Zdata

const kipu = {name, temp,feels_like, pressure, humidity, icon, description,speed}

setCurrentWeatherData(kipu)







const {name, icon, temp,description} = currentWeatherData

return(
    <div className="current-weather">
        <div className="current-weather-details">
            <div className="current-weather-city">
                {name}
            </div>
            <p className="current-weather-description">{description}</p>
            <div className="current-weather-temparature">{temp}°</div>
        </div>
        <img className="current-weather-image" src={suncloud} alt="nothi" />

    </div>
)




const {feels_like, pressure, humidity,speed} = currentWeatherData

console.log(feels_like, "jadfj")
return(
    <div className="air-condition">
        <h3  className="air-condition-title">AIR CONDITION</h3>
        <div className="air-conditon-container">
            <div className="air-conditon-tab">
                Real feel {Math.trunc(feels_like)}°
            </div>
            <div className="air-conditon-tab">
                Humidity {humidity}%
            </div>
            <div className="air-conditon-tab">
                Pressure {pressure}mbar
            </div>
            <div className="air-conditon-tab">
                Wind Speed {speed}km/h
            </div>
        </div>
    </div>
)
