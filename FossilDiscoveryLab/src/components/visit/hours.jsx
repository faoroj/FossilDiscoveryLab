import { Hoursimg, Clock } from '../../assets';

const hours = () => {
  return (
    <section id="hours" className='max-container mt-[108px]'>

      <div className='flex flex-col md:flex-row items-stretch'> 

        {/* Left: Image Section */}
        <div className='flex-1'>
          <img src={Hoursimg} alt="Museum" className=" h-[250px] ss:h-[450px] md:h-[550px] w-full object-cover md:w-[750px]"/> 
        </div>

        {/* Right: Content Section */}
        <div className="bg-gray-200 flex-1 h-[550px] w-full flex flex-col items-center justify-center md:w-[750px] p-4"> 
                  {/* Title and Clock */}
              <div className='flexCenter'>
                <h3 className="font-inter text-[28px] ss:text-[38px] font-bold max-w-[523px] ml-3">Hours</h3>
                <img src={Clock} alt="Clock" className="w-[34px] ss:w-[44px] h-[34px] ss:h-[42px] ml-2"/>
              </div>

              {/* Opening Hours */}
              <p className="font-inter font-semibold leading-[150%] text-[18px] ss:text-[21px] max-w-[523px] mt-[15px] relative inline-block underline text-center underline-offset-[6px]">
                Open daily 8am-6pm
              </p>

              <p className=' text-secondary font-inter font-bold leading-[150%] text-[18px] ss:text-[21px] mt-5 text-center'>Prehistoric Palate Cafe</p>
              <p className='font-inter font-normal leading-[150%] text-[12px] ss:text-[16px] mt-1 text-center'>Lunch offered daily 11am-4pm</p>
              <p className='text-secondary font-inter font-bold leading-[150%] text-[18px] ss:text-[21px] mt-[15px] ss:mt-[40px] text-center'>Holiday Hours</p>
              <p className='font-inter font-normal leading-[150%] text-[12px] ss:text-[16px] mt-1 text-center'>Thanksgiving | Closed</p>
              <p className='font-inter font-normal leading-[150%] text-[12px] ss:text-[16px] mt-1 text-center'>Christmas Day | Closed</p>
              <p className='font-inter font-normal leading-[150%] text-[12px] ss:text-[16px] mt-1 text-center'>New Year's Day | Closed</p>
              <p className='font-inter font-normal leading-[150%] text-[12px] ss:text-[16px] italic text-center  mt-[20px] ss:mt-[40px]'>
                Galleries are busiest on weekday mornings due to school trips
              </p>

        </div>

      </div>
    </section>
  )
}
export default hours
