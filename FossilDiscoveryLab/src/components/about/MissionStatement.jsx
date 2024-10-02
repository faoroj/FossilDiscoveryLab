import { collection } from '../../assets';
import { motion } from 'framer-motion';


const MissionStatement = () => {
  return (
    <section id="Mission-Statement" className='max-container'>
      

      <div className="flex flex-col">
          <motion.h1 
            className='text-[32px] sm:text-[48px] font-inter font-semibold leading-[150%]'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true,}}
            transition={{ duration: 0.6, ease: 'easeInOut', delay:1.5 }}
          >Mission Statement
          </motion.h1>
          <motion.p 
            className='text-normal-16 mt-[29px]'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true,  }}
            transition={{ duration: 0.6, delay: 1.7, ease: 'easeInOut' }}
          >
            Our mission is to inspire curiosity, ignite imaginations, 
            and educate visitors of all ages about the fascinating history 
            of Earth's most magnificent creatures. Dive into the prehistoric 
            past with us, where every fossil tells a story, and every visit 
            sparks a new adventure in learning and discovery."
          </motion.p>
      </div>
      
      <motion.div 
        className='relative mt-[35px]'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, }}
        transition={{ duration: .6, delay: 1.5, ease: 'easeInOut' }}
      >

        <img src={ collection } alt='collection' className='w-full h-[212px] sm:h-auto object-cover'/>
        
        <div className='absolute inset-0 flex justify-center items-center'>
          <h1 className='font-extrabold font-inter text-flat text-center' style={{ fontSize: 'clamp(21px, 5vw, 64px)' }}>The Collection</h1>
        </div>

      </motion.div>

      <motion.div 
        className="mt-[35px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
      >
        <p className='text-normal-16'>
          From the mighty Tyrannosaurus rex to the graceful Pteranodon, our exhibits showcase a 
          wide range of dinosaur species that once ruled the ancient landscapes. Marvel at the 
          perfectly preserved skeletons, fossilized footprints, and rare artifacts that provide 
          glimpses into the daily lives of these magnificent creatures. Each specimen in our collection 
          tells a unique story of evolution, survival, and the mysteries of the past.
        </p>

        <p className='text-bold-16 text-secondary mt-[28px] hover:cursor-pointer hover:underline'>
          View Our Collection &gt;
        </p>
      </motion.div>

    </section>
  )
}

export default MissionStatement
