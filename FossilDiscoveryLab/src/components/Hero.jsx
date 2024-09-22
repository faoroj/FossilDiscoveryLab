import {  hero, pointer } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col relative`}>

      <img src={hero} alt='hero' className='flex-shrink-0 self-stretch w-full h-screen object-cover'/>

      
      <div className='px-[32px] sm:px-[100px] absolute inset-0 flexCenter text-center flex-col'>
        
        {/*  <img src={pointer} alt="pointer" className='w-[39px] h-[39px] mr-3 border-none'/> */}
        <h1 className='text-bold-48 text-flat'>Welcome to The <span className='text-secondary'>Fossil</span> Discovery Lab</h1>
        <h2 className='text-medium-28 text-flat'>Step Into a World Lost in Time</h2>

        <div className='flexCenter flex-col sm:flex-row mt-14'>
          <a href="/plan-your-visit" type='button' className='custom__button__rounded sm:mr-[40px] mt-[14px] sm:mt-0'>Plan Your Visit</a>
          <a href="/accessibility" type='button' className='custom__button__rounded sm:mr-[40px] mt-[14px] sm:mt-0'>Accessibility</a>
          <a href="/group-visit" type='button' className='custom__button__rounded mt-[14px] sm:mt-0'>Group Visit</a>
        </div>  
      </div>

    </section>
  )
}

export default Hero
