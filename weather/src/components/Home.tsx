import WeatherCard from "./WeatherCard";

const Home = () => {
  return (
    <div className="bg-blue-sky min-h-screen bg-[url('./assets/cloud.svg')] bg-cover w-full flex items-center justify-center" >
      <div>
        <WeatherCard />
      </div>
    </div>
  )
}

export default Home;