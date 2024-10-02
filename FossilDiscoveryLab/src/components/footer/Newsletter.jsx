import React from 'react'
import { motion } from 'framer-motion';



const Newsletter = () => {
  const animationVariants = {  
    left: { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 } },
    trans: {transition: { type: 'spring', damping: 18, mass: 0.75, delay: 0.7 } } 
};


  return (
    <section className='relative w-full'>

      <div className='relative w-full'>

        <motion.div 
          className='bg-primary w-full h-[180px] xxs:h-[273px] object-cover'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{ once: true, }}
          transition={{ duration: 0.85, ease: 'easeInOut', delay: 0.1 }}
        >

        </motion.div>
          <div className='padding-x max-container absolute inset-0 flex items-center justify-center md:justify-between flex-col md:flex-row gap-5 '>
            <motion.h1 
              className='text-flat font-inter font-normal leading-[150%] text-[16px] xxs:text-[24px] '
              {...animationVariants.left}
              {...animationVariants.trans}
              viewport={{ once: true }}
            >Sign Up For Our Newsletter
            </motion.h1>
          
          
            <motion.input 
              type="email"
              placeholder='Email Address'
              className='w-full ss:w-[600px] rounded-[6px] border border-black bg-flat h-[30px] xxs:h-[50px] pl-4 text-normal-16 focus:outline-none'
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              viewport={{ once: true, amount:1 }}
              transition={{ duration: 0.85, ease: 'easeInOut', delay: 0.9}}
            />   
          

          <motion.button 
            type="button" 
            className='custom__button__bevel custom__button__medium'
            {...animationVariants.right}
            {...animationVariants.trans}
            viewport={{ once: true }}
          >Submit
          </motion.button>
        </div>

      </div>

    </section>
  )
}

export default Newsletter
