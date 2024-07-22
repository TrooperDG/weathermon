
import { useEffect, useState } from "react"
import useFetch from "./utilities/useFetch.js"
import {Zdata} from "./utilities/dataC"
import { hourdata } from "./utilities/datah"
import WeatherToday from "././components/WeatherToday"
import DayForecast from "./components/DayForecast"
import "./styles.css"

export default function WeatherShow() {

  const API_KEY = "b3c89b0ed5e668bbc283a8a23698afdc";
  const [currentWeatherData , setCurrentWeatherData]= useState({});
  const [hourlyData , setHourlyData]= useState([]);
  // const [city , setCity] = useState("");
  // console.log(">>>>", city)
  
 
  async function fetchCurrentWeatherData({lat, lon, city}) {  

    console.log("1")
      let url = lat && lon ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    try {
      const response = await fetch(url)
      const data = await response.json() 
      if (data) {
        const{name, main: {temp, feels_like, pressure, humidity}, weather : [{icon, description}],wind: {speed}} = data

        const filteredCurrentData = {name,temp,feels_like, pressure, humidity, icon, description,speed}
        setCurrentWeatherData(filteredCurrentData)
      }
    } catch (e) {    
     console.log("halllla")
    }
  }

  async function fetchHourlyData({lat, lon, city}) {   

    console.log("2")
    let url = lat && lon ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=56&appid=${API_KEY}&units=metric` : `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=56&appid=${API_KEY}&units=metric`
    try {
      const response = await fetch(url)
      const data = await response.json() 
      if (data) {
        const filteredHourdata  = data.list.map(forecast => {
          const {main: {temp ,temp_min, temp_max}, dt,dt_txt,weather : [{icon, description}]} = forecast
          return {temp ,temp_min, temp_max,dt,dt_txt,icon, description}
        })
        setHourlyData(filteredHourdata)
      }
    } catch (e) {
      console.log("halllla on hour")
    }
  }


  function handleSearch(cityName){
    fetchCurrentWeatherData(cityName);
    fetchHourlyData(cityName);
  }

  function getBrowserGeolocationForcast(){
    navigator.geolocation.getCurrentPosition(({coords})=>{
      const {latitude : lat, longitude : lon} = coords
      // console.log(">>>", lat,lon)
      fetchCurrentWeatherData({lon , lat});
      fetchHourlyData({lon , lat});
    })
  }

  


  useEffect(()=>{
    getBrowserGeolocationForcast()

   
      // fetchCurrentWeatherData();
      // fetchHourlyData({lon , lat});

      // const{name, main: {temp, feels_like, pressure, humidity}, weather : [{icon, description}],wind: {speed}} = Zdata
      // const kipu = {name,temp,feels_like, pressure, humidity, icon, description,speed}
      // setCurrentWeatherData(kipu)
      // setHourlyData(hourdata)
      
  },[])


  

  return (
    <div className="main-container">
      { currentWeatherData.name&&
        <div className="weather-container">
        <WeatherToday 
          currentWeatherData = {currentWeatherData}
          hourlyData = {hourlyData}
          handleSearch = {handleSearch}
        />
        <DayForecast hourlyData = {hourlyData} />
        </div>}
    </div>
  )
}
