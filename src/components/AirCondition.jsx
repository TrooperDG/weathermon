
 
export default function AirCondition({currentWeatherData}){

    const {feels_like, pressure, humidity,speed} = currentWeatherData

    return(
        <div className="air-condition">
            <h3  className="air-condition-title title-font">AIR CONDITION</h3>
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
}