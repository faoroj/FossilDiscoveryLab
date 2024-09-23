import { Hoursimg, Clock } from '../../assets';

const hours = () => {
  return (
    <section className='px'>

    <div className='flex flex-row mt-[80px]'>

      <img src={Hoursimg} alt="Museum" className="w-[621px] h-[508px]"/>
       

      <div className="flexCenter flex-col flex-1 bg-white max-h-[608px]">
        <div className='flexCenter flex-col'>
          <div className='flexCenter'>
            <h3 className="font-inter text-[38px] font-bold max-w-[523px] ml-3">
              Hours
            </h3>

            <img src={Clock} alt="Clock" className="w-[44px] h-[42px] ml-2"/>
          </div>

          <p className="text-semibold-21 max-w-[523px] mt-[15px] relative inline-block underline text-center underline-offset-[6px]">
            Open daily 8am-6pm
          </p>


          <p className=' text-secondary text-bold-21 mt-5 text-center'>Prehistoric Palate Cafe</p>
          <p className='text-normal-16 mt-1 text-center'>Lunch offered daily 11am - 4pm</p>

          <p className='text-secondary text-bold-21 mt-[40px] text-center'>Holiday Hours</p>
          <p className='text-normal-16 mt-1 text-center'>Thanksgiving | Closed</p>
          <p className='text-normal-16 mt-1 text-center'>Christmas Day | Closed</p>
          <p className='text-normal-16 mt-1 text-center'>New Year's Day | Closed</p>


          <p className='text-normal-16 italic text-center mt-[40px]'>Galleries are busiest on weekday mornings due to school trips</p>
        </div>
      </div>
    
    </div>

  </section>



  )
}

export default hours
