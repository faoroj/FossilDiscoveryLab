import { Hoursimg, Clock } from '../../assets';

const hours = () => {
  return (
    <section className='px'>

    <div className='flex flex-row mt-[80px]'>

      <img src={Hoursimg} alt="Museum" className="w-[621px] h-[608px]"/>
       

      <div className="flex justify-start item-start flex-col bg-white px-[26px] pt-[82px] max-h-[608px]">

        <div className='flexCenter'>
          <h3 className="font-inter text-[38px] font-bold max-w-[523px] ml-3">
            Hours
          </h3>

          <img src={Clock} alt="Clock" className="w-[44px] h-[42px] ml-2"/>
        </div>

        <p className="text-semibold-21 max-w-[523px] mt-[15px] relative inline-block underline decoration-transparent after:content-[''] 
          after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1px] after:bg-black text-center">
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

  </section>



  )
}

export default hours
