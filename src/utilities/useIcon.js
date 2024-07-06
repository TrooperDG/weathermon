import { useEffect, useState } from "react";

export default function useIcon(icon){
    const [iconPath , setIconPath] = useState('');

   function iconPathFinder(icon){
        switch (icon) {
            case "01d":
                setIconPath("/src/assets/images/clear_sky_day.png")
                break;
            case "01n":
                setIconPath("/src/assets/images/clear_sky_night.png")
                break;
            case "02d":
                setIconPath("/src/assets/images/few_clouds_day.png")
                break;
            case "02n":
                setIconPath("/src/assets/images/few_clouds_night.png")
                break;
            case "03d":
            case "03n":
                setIconPath("/src/assets/images/scattered_clouds.png")
                break;
            case "04d":
            case "04n":
                setIconPath("/src/assets/images/brocken_clouds.png")
                break;
            case "09d":
            case "09n":
                setIconPath("/src/assets/images/shower_rain.png")
                break;
            case "10d":
                setIconPath("/src/assets/images/rain_day.png")
                break;
            case "10n":
                setIconPath("/src/assets/images/rain_night.png")
                break;
            case "11d":
            case "11n":
                setIconPath("/src/assets/images/thunderstorm.png")
                break;
            case "13d":
            case "13n":
                setIconPath("/src/assets/images/snow.png")
                break;
            case "50d":
            case "50n":
                setIconPath("/src/assets/images/mist.png")
                break;
       }
   }

  useEffect(()=>{
    iconPathFinder(icon)
  },[icon])

  return iconPath
}