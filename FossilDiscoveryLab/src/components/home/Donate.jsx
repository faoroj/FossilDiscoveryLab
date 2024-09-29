import { DonateBanner } from '../../assets';

const Donate = () => {
  return (
    <section className='relative'>

      <img 
        src={DonateBanner} 
        alt='Exhibit' 
        className='w-full h-[260px] xs:h-[320px] sm:h-[420px] object-cover'
      />
      
      <div className='bg-[rgba(217,217,217,0.7)] px-[32px] py-[32px] relative sm:absolute w-full sm:w-[500px] sm:h-[220px] my-10 sm:my-0 h-auto
        inset-0 flex justify-center flex-col gap-5 sm:gap-0 sm:left-[20%] sm:top-[20%]'>
        
        <h1 className='text-semibold-21 '>Want To Support Us?</h1>
        
        <p className='text-[12px] font-inter font-normal leading-[150%] xs:text-[16px] text-mediumBlack '>
          Donations allow us to continue building new exhibits, develop new education programs and more.
        </p>

        <div className='flexCenter'>
          <button className='custom__button__bevel custom__button__medium mt-0 sm:mt-5'>Donate</button>
        </div>
      </div>


    </section>
  )
}

export default Donate
