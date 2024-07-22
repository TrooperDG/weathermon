import { useState } from "react";


export default function WeatherSearch({handleSearch}){

    const[cityName , setCityName] = useState("")
    function handleChange(e){
       setCityName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        handleSearch({city : cityName}) 
       
    }

 
    return(
        <div className="weather-search">
           <form onSubmit={handleSubmit}>
            <input 
                    className="search-input" 
                    type="text" 
                    placeholder="search" 
                    onChange={handleChange}
                />
           </form>
            
        </div>
    )
}