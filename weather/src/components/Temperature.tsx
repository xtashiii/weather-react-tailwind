type Temperature = {
  temp: string;
}

const Temperature = (props: Temperature) => {

  return (
    <div className="mt-[60px] ml-42 mr-42 ">
      <span className="font-lato font-bold leading-[5.5rem] text-[5.5rem] mb-5 text-white">{props.temp}</span>
      <span className="absolute text-2xl font-lato font-bold text-low-white">°C</span>
      <div className="mt-1  text-center flex items-center justify-center gap-1 ">
        <span className="font-lato font-bold- leading-[20px] text-[1.25rem] text-white">22°</span>
        <span className="font-lato font-bold- leading-[20px] text-[1.25rem] text-white-location-name">16°</span>
      </div>
    </div>
  )

}

export default Temperature;