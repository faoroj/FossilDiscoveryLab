import { Accessibility } from '../../assets';

const accessibilityhero = () => {
  return (
    <section className='px'>
        <div className='relative'>
          <img src={ Accessibility } alt='accessibility' className='w-[1239px] h-[458px] mt-[70px]'/>
          <h1 className='text-[64px] font-extrabold font-inter text-flat text-center absolute inset-0 top-[200px]'>Accessibility</h1>
        </div>

        <p className='text-normal-16 mt-[47px] text-center'>
            At the Fossil Discovery Lab, we strive to ensure 
            that all visitors can fully enjoy our collection, building, programs, 
            and services. If you have any questions about accessibility or need assistance, 
            please feel free to reach out to us at <span className='text-secondary font-bold underline'>help@fossildiscoverymuseum.org</span>.
        </p>

        
    </section>
  )
}

export default accessibilityhero
