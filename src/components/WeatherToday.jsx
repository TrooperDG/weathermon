import AirCondition from "./AirCondition";
import HourlyForecast from "./HourlyForecast";
import WeatherCurrent from "./WeatherCurrent";
import WeatherSearch from "./WeatherSearch";


export default function CurrentWeather({currentWeatherData, hourlyData,handleSearch }){


    // const{name, main: {temp, feels_like, pressure, humidity}, weather : [{icon, description}],wind: {speed}} = currentWeatherData

    // const kipu = {name,temp,feels_like, pressure, humidity, icon, description,speed}

    // console.log(currentWeatherData)

    return(
        <div className="weather-today">

            <WeatherSearch 
               handleSearch = {handleSearch}
            />
            <WeatherCurrent 
                currentWeatherData = {currentWeatherData}
            />
            <HourlyForecast
                hourlyData = {hourlyData}
            />
            <AirCondition 
                currentWeatherData = {currentWeatherData}
            />
             
        </div>
    )
}