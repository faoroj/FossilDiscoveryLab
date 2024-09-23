import { DonateBanner } from '../../assets';

const Donate = () => {
  return (
    <section className='relative'>

      <img 
        src={DonateBanner} 
        alt='Exhibit' 
        className='flex-shrink-0 self-stretch w-full h-[542px] object-cover'
      />

      <div className='bg-[rgba(217,217,217,0.7)] absolute w-[589px] h-[240px] inset-0 top-[156px] left-[404px]'>

        <h1 className='text-semibold-28 pt-6 px-[46px]'>Want To Support Us?</h1>
        
        <p className='text-normal-18 text-mediumBlack pt-3 px-[46px]'>
          Donations allow us to continue building new exhibits, develop new education programs and more.
        </p>

        <div className='flexCenter'>
          <button className='custom__button__bevel custom__button__medium mb-[10px] mt-6'>Donate</button>
        </div>

      </div>


    </section>
  )
}

export default Donate
