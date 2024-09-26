import { Accessibility } from '../../assets';

const accessibilityhero = () => {
  return (
    <section id="accessibility" className='max-container'>

        <div className='relative'>
          <img src={ Accessibility } alt='accessibility' className='w-full h-auto md:h-[450px] sm:h-[250px] object-cover'/>

          <div className='absolute inset-0 flex justify-center items-center'>
            <h1 className='font-extrabold font-inter text-flat text-center' style={{ fontSize: 'clamp(21px, 5vw, 64px)' }}>Accessibility</h1>
          </div>
          
        </div>

        <p className='text-normal-16 mt-[25px] md:mt-[47px] text-center'>
            At the Fossil Discovery Lab, we strive to ensure 
            that all visitors can fully enjoy our collection, building, programs, 
            and services. If you have any questions about accessibility or need assistance, 
            please feel free to reach out to us at <span className='text-secondary font-bold underline break-words whitespace-normal'>help@fossildiscoverymuseum.org</span>.
        </p>

        
    </section>
  )
}

export default accessibilityhero
