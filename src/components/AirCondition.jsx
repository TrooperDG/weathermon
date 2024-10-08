
 
export default function AirCondition({currentWeatherData}){

    const {feels_like, pressure, humidity,speed} = currentWeatherData

    return(
        <div className="air-condition">
            <h3  className="air-condition-title title-font">AIR CONDITION</h3>
            <div className="air-conditon-container">
                <div className="air-conditon-tab">
                    <svg className="air-condition-icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M501.54-530v-60h196.92v60H501.54Zm0-155.39v-59.99h316.92v59.99H501.54ZM323.08-140q-74.93 0-127.46-52.54-52.54-52.54-52.54-127.46 0-44.92 21-83.92t59-65.31V-720q0-41.92 29.04-70.96Q281.15-820 323.08-820q41.92 0 70.96 29.04 29.04 29.04 29.04 70.96v250.77q38 26.31 59 65.31t21 83.92q0 74.92-52.54 127.46Q398-140 323.08-140Zm-120-180h240q0-29.38-14.23-55.73-14.23-26.35-40.7-45.66L363.08-440v-280q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5v280L258-421.39q-26.46 19.31-40.69 45.66-14.23 26.35-14.23 55.73Z"/></svg>
                    Real feel {Math.trunc(feels_like)}°
                </div>
                <div className="air-conditon-tab">
                    <svg className="air-condition-icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M572.26-257.69q20.82 0 35.43-14.57 14.62-14.57 14.62-35.39 0-20.81-14.57-35.43-14.57-14.61-35.39-14.61-20.81 0-35.43 14.57-14.61 14.57-14.61 35.38 0 20.82 14.57 35.43 14.57 14.62 35.38 14.62ZM378-256.23 623.77-502 582-544.15 335.85-298 378-256.23Zm9.65-186.08q20.81 0 35.43-14.57 14.61-14.57 14.61-35.38 0-20.82-14.57-35.43-14.57-14.62-35.38-14.62-20.82 0-35.43 14.57-14.62 14.57-14.62 35.39 0 20.81 14.57 35.43 14.57 14.61 35.39 14.61ZM479.93-100q-128.47 0-214.2-88.27Q180-276.54 180-408q0-93.08 74.5-204.04T480-853.84Q631-723 705.5-612.04 780-501.08 780-408q0 131.46-85.8 219.73Q608.4-100 479.93-100Zm.07-60q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-316.92Z"/></svg>
                    Humidity {humidity}%
                </div>
                <div className="air-conditon-tab">
                    <svg className="air-condition-icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M180-140v-60h600v60H180Zm300-153.85L293.85-480 336-522.15l114 114V-820h60v411.85l114-114L666.15-480 480-293.85Z"/></svg>
                    Pressure {pressure}mbar
                </div>
                <div className="air-conditon-tab">
                    <svg className="air-condition-icon" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M460-174.62q-43.08 0-74.04-29.03-30.96-29.04-34.42-70.96h60.77q3.07 17.38 16.31 28.69 13.23 11.31 31.38 11.31 20.85 0 35.42-14.58Q510-263.77 510-284.62q0-20.84-14.58-35.42-14.57-14.58-35.42-14.58H90v-59.99h370q45.77 0 77.88 32.11Q570-330.38 570-284.62q0 45.77-32.12 77.89-32.11 32.11-77.88 32.11ZM90-565.39v-59.99h530q29.85 0 49.92-20.08Q690-665.54 690-695.38q0-29.85-20.08-49.93-20.07-20.08-49.92-20.08-27.54 0-46.46 17-18.93 17-22 43h-60.77q3.46-51.3 40.31-85.65 36.84-34.34 88.92-34.34 54.77 0 92.38 37.61Q750-750.15 750-695.38q0 54.76-37.62 92.38-37.61 37.61-92.38 37.61H90Zm660 314.62v-60.77q26-3.07 43-22 17-18.92 17-46.46 0-29.85-20.08-49.92Q769.85-450 740-450H90v-60h650q54.77 0 92.38 37.62Q870-434.77 870-380q0 52.08-34.35 88.92-34.34 36.85-85.65 40.31Z"/></svg>
                    Wind Speed {speed}km/h
                </div>
            </div>
        </div>
    )
}