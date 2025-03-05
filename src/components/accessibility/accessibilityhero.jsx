import { Accessibility } from '../../assets';
import { motion } from 'framer-motion';

const accessibilityhero = () => {
  return (
    <motion.section 
      id="accessibility" 
      className='max-container mt-[80px]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3, delay: 0.4, ease: 'easeInOut' }}
    >

        <div className='relative'>
          <img src={ Accessibility } alt='accessibility' className='w-full h-[200px] md:h-[450px] sm:h-[350px] object-cover'/>

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

        
    </motion.section>
  )
}

export default accessibilityhero
