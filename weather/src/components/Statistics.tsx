import wind from '../assets/icons/wind.svg';
import humidityIcon from '../assets/icons/humidity.svg'
import rain from '../assets/icons/rain.svg';
import BoxInfo from './BoxInfo';

type Statistic = {
  wind_mph: string;
  humidity: string;
  cloud: string;
}

const Statistics = ({wind_mph, humidity, cloud}:Statistic) => {
  return (
    <div className=" h-[185px] flex mt-[162px] justify-center gap-2">
      <BoxInfo image={wind} numbers={wind_mph} infoName='Wind' measure='Km/h'/>
      <BoxInfo image={humidityIcon} numbers={humidity} infoName='Humidity' measure='%' />
      <BoxInfo image={rain} numbers={cloud} infoName='Rain' measure='%' />
    </div>    
  )
}

export default Statistics;