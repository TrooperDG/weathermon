import suncloud from "../assets/images/sunnycloud.svg"

export default function HourlyForecast({ currenHourData }) {

  // console.log(currenHourData[0].dt_txt)

  // const date = new Date(currenHourData[0].dt_txt)
  // console.log("////////" , new Date(currenHourData[0].dt_txt).getHours())

  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-container">
        <h4 className="hourly-forecast-title">TODAY'S FORECAST</h4>

        <div className="hourly-forecast-details-container">

          {currenHourData && currenHourData.slice(1, 10).map((item, index) => (
           
            <div key={index} className="hourly-forecast-details">
              <section className="hourly-forecast-section">
                <div className="hourly-forecast-time">
                  {new Date(item.dt_txt).getHours()}:00 AM
                </div>
                <img
                  className="hourly-forecast-image"
                  src={suncloud}
                  alt="image"
                />
                <div className="hourly-forecast-temparature">{Math.trunc(item.temp)}°</div>
              </section>
            </div>
          ))}






          {/* 
          <div className="hourly-forecast-details">
            <section className="hourly-forecast-section">
              <div className="hourly-forecast-time">6:00 AM</div>
              <img
                className="hourly-forecast-image"
                src={suncloud}
                alt="image"
              />
              <div className="hourly-forecast-temparature">31°</div>
            </section>
          </div>

          <div className="hourly-forecast-details">
            <section className="hourly-forecast-section">
              <div className="hourly-forecast-time">6:00 AM</div>
              <img
                className="hourly-forecast-image"
                src={suncloud}
                alt="image"
              />
              <div className="hourly-forecast-temparature">31°</div>
            </section>
          </div>
          <div className="hourly-forecast-details">
            <section className="hourly-forecast-section">
              <div className="hourly-forecast-time">6:00 AM</div>
              <img
                className="hourly-forecast-image"
                src={suncloud}
                alt="image"
              />
              <div className="hourly-forecast-temparature">31°</div>
            </section>
          </div>
          <div className="hourly-forecast-details">
            <section className="hourly-forecast-section">
              <div className="hourly-forecast-time">6:00 AM</div>
              <img
                className="hourly-forecast-image"
                src={suncloud}
                alt="image"
              />
              <div className="hourly-forecast-temparature">31°</div>
            </section>
          </div>
          <div className="hourly-forecast-details">
            <section className="hourly-forecast-section">
              <div className="hourly-forecast-time">6:00 AM</div>
              <img
                className="hourly-forecast-image"
                src={suncloud}
                alt="image"
              />
              <div className="hourly-forecast-temparature">31°</div>
            </section>
          </div> */}
        </div>
      </div>
    </div>
  )
}
