type InfoDetails = {
  image: string;
  numbers: string;
  infoName: string; 
  measure: string;
}

const BoxInfo = ({image, numbers, infoName, measure}: InfoDetails) => {
  return (
    <div className="">
      <div className="bg-blue-statistic-box w-[9.166875rem] flex items-center  py-3 px-4 rounded-md">
        <div className='h-8 flex items-center pr-3'>
          <img src={image} />
        </div>
        <div>
          <span className='text-statistic-white text-xs block'>{infoName}</span>
          <div>
            <span className='text-statistic-white font-lato font-bold text-lg pr-1'>{numbers}</span>
            <span className='text-low-white font-lato font-bold text-sm '>{measure}</span>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default BoxInfo;
