
import { useEffect, useState } from "react"
import useFetch from "./utilities/useFetch.js"
import {Zdata} from "./utilities/dataC"
import { hourdata } from "./utilities/datah"
import WeatherToday from "././components/WeatherToday"
import DayForecast from "./components/DayForecast"
import "./styles.css"

export default function WeatherShow() {

  const [currentWeatherData , setCurrentWeatherData]= useState({});
  const [hourlyData , setHourlyData]= useState([]);
  
 
  async function fetchCurrentWeatherData() {  
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=guwahati&appid=b3c89b0ed5e668bbc283a8a23698afdc&units=metric`)
      const data = await response.json() 
      if (data) {
        setCurrentWeatherData(data)
      }
    } catch (e) {    
     console.log("halllla")
    }
  }

  async function fetchHourlyData() {   
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=19.0760&lon=72.8777&cnt=56&appid=b3c89b0ed5e668bbc283a8a23698afdc&units=metric`)
      const data = await response.json() 
      if (data) {
        const filteredHourdata  = data.list.map(forecast => {
          const {main: {temp ,temp_min, temp_max}, dt,dt_txt,weather : [{icon, description}]} = forecast
          return {temp ,temp_min, temp_max,dt,dt_txt,icon, description}
        })
        setHourlyData(filteredHourdata)
        console.log(filteredHourdata)   
      }
    } catch (e) {
      console.log("halllla on hour")
    }
  }



  useEffect(()=>{
    // fetchCurrentWeatherData();
      setCurrentWeatherData(Zdata)

      setHourlyData(hourdata)
      // fetchHourlyData();

      // console.log(Zdata)
      // console.log("=======", hourdata.list)
  },[])


  

  return (
    <div className="main-container">
      { currentWeatherData.weather &&
        <div className="weather-container">
        <WeatherToday 
          currentWeatherData = {currentWeatherData}
          currenHourData = {hourlyData}
        />
        <DayForecast hourlyData = {hourlyData} />
        </div>}
    </div>
  )
}