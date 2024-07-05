import AirCondition from "./AirCondition";
import HourlyForecast from "./HourlyForecast";
import WeatherCurrent from "./WeatherCurrent";
import WeatherSearch from "./WeatherSearch";


export default function CurrentWeather({currentWeatherData, currenHourData}){

    return(
        <div className="weather-today">

            <WeatherSearch />
            <WeatherCurrent 
                currentWeatherData = {currentWeatherData}
            />
            <HourlyForecast
                currenHourData = {currenHourData}
            />
            <AirCondition 
                currentWeatherData = {currentWeatherData}
            />
             
        </div>
    )
}