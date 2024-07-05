
 
export default function AirCondition({currentWeatherData}){
    return(
        <div className="air-condition">
            <h3  className="air-condition-title">AIR CONDITION</h3>
            <div className="air-conditon-container">
                <div className="air-conditon-tab">
                    Real feel {Math.trunc(currentWeatherData.main.feels_like)}°
                </div>
                <div className="air-conditon-tab">
                    Humidity {currentWeatherData.main.humidity}%
                </div>
                <div className="air-conditon-tab">
                    Pressure {currentWeatherData.main.pressure}mbar
                </div>
                <div className="air-conditon-tab">
                    Wind Speed {currentWeatherData.wind.speed}km/h
                </div>
            </div>
        </div>
    )
}