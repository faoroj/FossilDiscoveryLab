import {  hero, pointer } from '../../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      id="home" 
      className={`flex md:flex-row flex-col relative`}>

      <img src={hero} alt='hero' className='flex-shrink-0 self-stretch w-full h-screen object-cover'/>

      
      <div className='padding absolute inset-0 flexCenter text-center flex-col'>
        
        <div className='flexCenter'>
          <img src={pointer} alt="pointer" className='w-[39px] h-[39px] mr-3 border-none'/> 
          <h1 className='text-bold-48 text-flat'>Welcome to The <span className='text-secondary'>Fossil</span> Discovery Lab</h1>
        </div>
        
        <h2 className='text-medium-28 text-flat'>Step Into a World Lost in Time</h2>

        <div className='flexCenter flex-col sm:flex-row mt-14'>

          <Link to="/VisitUs">
            <button type='button' className='custom__button__rounded sm:mr-[40px] mt-[14px] sm:mt-0'>Plan Your Visit</button>
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
