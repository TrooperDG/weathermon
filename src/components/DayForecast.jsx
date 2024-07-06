// import suncloud from "../assets/images/CA9649A0.png"
import useIcon from "../utilities/useIcon"


export default function DayForecast({hourlyData}) {
  // console.log(hourlyData)
 
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thurshday','Friday','Saturday']
  let dailyForecast = new Map();

  for (const forecastData of hourlyData) {
     let [date] = forecastData.dt_txt.split(" ")
     let dayOfTheWeak = DAYS[ new Date(date).getDay()]
     // console.log(dayOfTheWeak)
     if(dailyForecast.has(dayOfTheWeak)){
         dailyForecast.get(dayOfTheWeak).push(forecastData);
     }else{
         dailyForecast.set(dayOfTheWeak, [forecastData])
     }
  }
  for (const [key , value] of dailyForecast) {
     const temp_min = Math.trunc(Math.min(...Array.from(value ,item => item.temp_min)))
     const temp_max = Math.trunc(Math.max(...Array.from(value ,item => item.temp_max)))
     let icon = value.find(val => val).icon
     let description = value.find(val => val).description
     dailyForecast.set(key, {temp_min, temp_max, icon, description})

    //  console.log(temp_max)
  }
  
// console.log(Array.from(dailyForecast))



  return (
    <div className="weather-forecast">
      
      <h3 className="weather-forecast-title">5-DAY FORECAST</h3>
      <div className="weather-forecast-container">

        {Array.from(dailyForecast).map(([day, {temp_min, temp_max, icon, description}], index) => 

          <section key={index} className="weather-forecast-details">
            <div className="weather-forecast-day">{ index === 0 ? 'Today' : day}</div>
            <div className="weather-forecast-description">
                <img src={useIcon(icon)} alt="" className="weather-forecast-image" />
                <p className="weather-forecast-status">{description}</p>
            </div>
            <div className="weather-forecast-minmax-temp">{temp_max}/<span>{temp_min}</span> </div>
          </section>
        )}






          {/* <section className="weather-forecast-details">
            <div className="weather-forecast-day">Today</div>
            <div className="weather-forecast-description">
                <img src={suncloud} alt="" className="weather-forecast-image" />
                <p className="weather-forecast-status">Sunny</p>
            </div>
            <div className="weather-forecast-minmax-temp">34/<span>22</span> </div>
          </section>
          <section className="weather-forecast-details">
            <div className="weather-forecast-day">Today</div>
            <div className="weather-forecast-description">
                <img src={suncloud} alt="" className="weather-forecast-image" />
                <p className="weather-forecast-status">Sunny</p>
            </div>
            <div className="weather-forecast-minmax-temp">34/<span>22</span> </div>
          </section>
          <section className="weather-forecast-details">
            <div className="weather-forecast-day">Today</div>
            <div className="weather-forecast-description">
                <img src={suncloud} alt="" className="weather-forecast-image" />
                <p className="weather-forecast-status">Sunny</p>
            </div>
            <div className="weather-forecast-minmax-temp">34/<span>22</span> </div>
          </section>
          <section className="weather-forecast-details">
            <div className="weather-forecast-day">Today</div>
            <div className="weather-forecast-description">
                <img src={suncloud} alt="" className="weather-forecast-image" />
                <p className="weather-forecast-status">Sunny</p>
            </div>
            <div className="weather-forecast-minmax-temp">34/<span>22</span> </div>
          </section>
          <section className="weather-forecast-details">
            <div className="weather-forecast-day">Today</div>
            <div className="weather-forecast-description">
                <img src={suncloud} alt="" className="weather-forecast-image" />
                <p className="weather-forecast-status">Sunny</p>
            </div>
            <div className="weather-forecast-minmax-temp">34/<span>22</span> </div>
          </section> */}
         
      </div>
    </div>
  )
}
