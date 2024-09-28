import { useEffect, useState } from "react";

export default function useIcon(icon){
    const [iconPath , setIconPath] = useState('');

   function iconPathFinder(icon){
        switch (icon) {
            case "01d":
                setIconPath("/images/clear_sky_day.png")
                break;
            case "01n":
                setIconPath("/images/clear_sky_night.png")
                break;
            case "02d":
                setIconPath("/images/few_clouds_day.png")
                break;
            case "02n":
                setIconPath("/images/few_clouds_night.png")
                break;
            case "03d":
            case "03n":
                setIconPath("/images/scattered_clouds.png")
                break;
            case "04d":
            case "04n":
                setIconPath("/images/brocken_clouds.png")
                break;
            case "09d":
            case "09n":
                setIconPath("/images/shower_rain.png")
                break;
            case "10d":
                setIconPath("/images/rain_day.png")
                break;
            case "10n":
                setIconPath("/images/rain_night.png")
                break;
            case "11d":
            case "11n":
                setIconPath("/images/thunderstorm.png")
                break;
            case "13d":
            case "13n":
                setIconPath("/images/snow.png")
                break;
            case "50d":
            case "50n":
                setIconPath("/images/mist.png")
                break;
       }
   }

  useEffect(()=>{
    iconPathFinder(icon)
  },[icon])

  return iconPath
}