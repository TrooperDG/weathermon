// import suncloud from "../assets/images/CA9649A0.png"
import useIcon from "../utilities/useIcon"

export default function HourlyForecast({ hourlyData }) {


  // console.log(currenHourData[0].dt_txt)

  // const date = new Date(currenHourData[0].dt_txt)
  // console.log("////////" , new Date(currenHourData[0].dt_txt).getHours())

  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-container">
        <h4 className="hourly-forecast-title">TODAY'S FORECAST</h4>

        <div className="hourly-forecast-details-container">

          {hourlyData && hourlyData.slice(1, 10).map(({dt_txt,icon,temp}, index) => (
           
            <div key={index} className="hourly-forecast-details">
              <section className="hourly-forecast-section">
                <div className="hourly-forecast-time">
                  {(new Date(dt_txt).getHours() %12 || 12)}:00 
                  {new Date(dt_txt).getHours() >=12 ? "PM" : "AM"}
                </div>
                <img
                  className="hourly-forecast-image"
                  src={useIcon(icon)}
                  alt="image"
                />
                <div className="hourly-forecast-temparature">{Math.trunc(temp)}°</div>
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
