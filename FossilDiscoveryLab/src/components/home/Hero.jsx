import {  hero, pointer } from '../../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col relative`}>

      <img src={hero} alt='hero' className='flex-shrink-0 self-stretch w-full h-screen object-cover'/>

      
      <div className='padding absolute inset-0 flexCenter text-center flex-col mt-10'>

        <div className='flexCenter relative'>
          <h1 className='font-inter font-bold leading-[150%] text-[38px] xs:text-[48px] text-flat relative'>
            <span className="relative">
              <img 
                src={pointer} 
                alt="pointer" 
                className='w-[39px] h-[39px] absolute left-[-50px] top-[32px] transform -translate-y-1/2 hidden sm:block' 
              /> 
              Welcome to The <span className='text-secondary'>Fossil</span> Discovery Lab
            </span>
          </h1>
        </div>

        <h2 className='font-inter font-medium leading-[150%] text-flat text-[21px] sm:text-[28px]'>Step Into a World Lost in Time</h2>

        <div className='flexCenter flex-col sm:flex-row mt-6 sm:mt-14'>

          <Link to="/VisitUs">
            <button type='button' className='custom__button__rounded sm:mr-[40px]'>Plan Your Visit</button>
          </Link>

          <Link to="/Accessibility">
            <button type='button' className='custom__button__rounded sm:mr-[40px] mt-[14px] sm:mt-0'>Accessibility</button>
          </Link>

          <Link to="/GroupVisit">
            <button type='button' className='custom__button__rounded mt-[14px] sm:mt-0'>Group Visit</button>
          </Link>

        </div>  
      </div>

    </section>
  )
}

export default Hero
