import { DonateBanner } from '../../assets';

const Donate = () => {
  return (
    <section className='relative'>

      <img 
        src={DonateBanner} 
        alt='Exhibit' 
        className='w-full h-[200px] sm:h-[420px] ss:h-[300px] object-cover'
      />
      
      <div className='bg-[rgba(217,217,217,0.7)] relative sm:absolute w-full sm:w-[500px] sm:h-[220px] my-10 sm:my-0 h-auto
        inset-0 p-4 flex justify-center flex-col gap-5 sm:gap-0 sm:left-[20%] sm:top-[20%]'>
        
        <h1 className='text-semibold-21 pt-6 px-[46px]'>Want To Support Us?</h1>
        
        <p className='text-normal-18 text-mediumBlack pt-3 px-[46px]'>
          Donations allow us to continue building new exhibits, develop new education programs and more.
        </p>

        <div className='flexCenter'>
          <button className='custom__button__bevel custom__button__medium mb-[15px]'>Donate</button>
        </div>
      </div>


    </section>
  )
}

export default Donate
