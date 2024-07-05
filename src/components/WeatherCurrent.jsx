
import suncloud  from "../assets/images/sunnycloud.svg"

export default function WeatherCurrent({currentWeatherData}){

    const {name, weather, main:{temp}} = currentWeatherData

    return(
        <div className="current-weather">
            <div className="current-weather-details">
                <div className="current-weather-city">
                    {name}
                </div>
                <p className="current-weather-description">{weather[0].main}</p>
                <div className="current-weather-temparature">{temp}°</div>
            </div>
            <img className="current-weather-image" src={suncloud} alt="nothi" />

        </div>
    )
}