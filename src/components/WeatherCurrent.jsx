
// import suncloud  from "../assets/images/CA9649A0.png"
import useIcon from "../utilities/useIcon"

export default function WeatherCurrent({currentWeatherData}){

    const {name, icon, temp,description} = currentWeatherData

// console.log(useIcon('02d'))
// console.log(suncloud)

    return(
        <div className="current-weather">
            <div className="current-weather-details">
                <div className="current-weather-city">
                    {name}
                </div>
                <p className="current-weather-description">{description}</p>
                <div className="current-weather-temparature">{Math.trunc(temp)}°</div>
            </div>
            <img className="current-weather-image" src={useIcon(icon)} alt="nothi" />

        </div>
    )
}