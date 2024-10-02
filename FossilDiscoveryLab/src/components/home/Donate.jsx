import { DonateBanner } from '../../assets';
import { motion } from 'framer-motion';

const Donate = () => {

  const amount = window.innerWidth > 768 ? 1 : 0


  return (
    <section className='relative'>

      <motion.img 
        src={DonateBanner} 
        alt='Exhibit' 
        className='w-full h-[260px] xs:h-[320px] sm:h-[420px] object-cover'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{ once: true, amount:.4 }}
        transition={{ duration: 0.85, ease: 'easeInOut', delay: 0.1 }}
      />
      
      <motion.div 
        className='bg-[rgba(217,217,217,0.7)] px-[32px] py-[32px] relative sm:absolute w-full sm:w-[500px] sm:h-[220px] my-10 sm:my-0 h-auto
        inset-0 flex justify-center flex-col gap-5 sm:gap-0 sm:left-[20%] sm:top-[20%]'
        initial= {{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount }}
        transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 1 }} 
        >
        
        <h1 className='text-semibold-21 '>Want To Support Us?</h1>
        
        <p className='text-[16px] xs:text-[16px] font-inter font-normal leading-[150%]  text-mediumBlack '>
          Donations allow us to continue building new exhibits, develop new education programs and more.
        </p>

        <div className='flexCenter'>
          <button className='custom__button__bevel custom__button__medium mt-0 sm:mt-5'>Donate</button>
        </div>
      </motion.div>


    </section>
  )
}

export default Donate
