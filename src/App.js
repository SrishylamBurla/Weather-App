import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'



function App() {
      const apiKey = "2038e46e2b34af1c3f9cd4f10108f62d";
      const [data, setData] = useState({})
      const [inputCity, setInputCity] = useState("")

      const getWeatherDetails = (cityName) => {
        if(!cityName) return
       const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {

          console.log("response", res.data)
          setData(res.data)
        }).catch((err) => {
          console.log("err", err)
        })
      }

      const handleChangeInput = (e) => {
        
        setInputCity(e.target.value)
      }

      const handleSearch = () => {
        getWeatherDetails(inputCity)
      }

      useEffect(() => {
        getWeatherDetails("delhi")
      }, [])

  return (
    <div className="col-md-12">
      <div className="weatherBg">
     <h1>Weather App</h1>

     <div className='d-grid gap-3 col-4 mt-4'>

     
     <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput}/>
     <button type="button" className='btn btn-primary' onClick = {handleSearch}>Search</button>
     </div>
     </div>
     <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherReport">
      <FontAwesomeIcon className="cloud" icon={faCloudSunRain} />
        <h3 className="city">{data.name}</h3>
          <h2 className="temp">{((data.main.temp)-273.15).toFixed(2)}°C </h2>
      </div>
     </div>
    </div>
  );
}

export default App;
