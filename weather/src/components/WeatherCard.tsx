import { useEffect, useState } from "react";
import pin from '../assets/icons/pin.svg';
import Temperature from "./Temperature";
import Statistics from "./Statistics";

interface Weather {
  location: {
    lat: number;
    lon: number;
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  }
  current: {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    is_day: number;
    cloud: number;
    rain: number;
    last_updated: string;
  }
}

const WeatherCard = () => {

  const [ apiData, setApiData ] = useState<Weather>();
  const [ cityName, setCityName ] = useState('')

  useEffect(() => {
    const fetchCity = async() => {
      fetch('http://ip-api.com/json/')
      .then(res => res.json())
      .then((data) => {
        setCityName(data.city)
      })
    }
    fetchCity()
  })
  
  useEffect(() => {
    const fetchData = async() => {
      if (cityName == '') {
        console.log('waiting')
      }
      else {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${cityName}`)
        .then(res => res.json())
        .then((data) => {
          setApiData(data)
        })
      }
    }
    fetchData()
  }, [cityName])

  if (apiData !== undefined) {
    const { temp_c } = apiData.current
    const formatedTemp = temp_c.toFixed().toString() 
    const { name , region } = apiData.location
    const { wind_kph, humidity, cloud } = apiData.current
    const windKph = wind_kph.toFixed().toString()   
    const humidityValue = humidity.toString();
    const cloudValue = cloud.toString();
      return (
        <div>
          <div className="bg-[url('./assets/bg-temp-now.png')] h-120 w-120 rounded-[10px]  overflow-hidden  ">
            <div className="flex justify-end mt-[33.5px] mr-[32px] items-center gap-[0.520625rem]">
              <img src={pin} className="h-5" alt="" />
              <span className="text-white-location-name font-bold font-lato text-[1.0625rem] leading-1">
                {name}, {region}
              </span>
            </div>
            <Temperature temp={formatedTemp} />
            <Statistics wind_mph={windKph} humidity={humidityValue} cloud={cloudValue}/>
          </div>
        </div>
      )
    }
  }
    
  

export default WeatherCard;