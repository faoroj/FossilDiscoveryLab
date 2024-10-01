import {  hero, pointer } from '../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col relative`}>

      <img 
        src={hero} 
        alt='hero' 
        className='flex-shrink-0 self-stretch w-full h-screen object-cover'
        
      />

      <motion.div 
        className='padding absolute inset-0 flexCenter text-center flex-col mt-10'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 1, 
            },
          },
        }}
        >

        <motion.div 
          className='flexCenter flex-col relative'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ staggerChildren: 0.4  }}
          >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4,  ease: "easeInOut" }}
            className='font-inter font-bold leading-[150%] text-[38px] xs:text-[48px] text-flat relative'
            >
            <span className="relative" >
              <img 
                src={pointer} 
                alt="pointer" 
                className='w-[39px] h-[39px] absolute left-[-50px] top-[32px] transform -translate-y-1/2 hidden sm:block' 
              /> 
              Welcome to The <span className='text-secondary'>Fossil</span> Discovery Lab
            </span>
          </motion.h1>

          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4,  ease: "easeInOut" }}
            className='font-inter font-medium leading-[150%] text-flat text-[21px] sm:text-[28px]'
            >
            Step Into a World Lost in Time
          </motion.h2>

        </motion.div>


        <motion.div 
          className='flexCenter flex-col sm:flex-row mt-6 sm:mt-14'
          variants={{
            hidden: {opacity: 0},
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4,
              },
            },
          }}
          >

          <Link to="/VisitUs">
            <motion.button 
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              type='button' 
              className='custom__button__rounded sm:mr-[40px]'
              >Plan Your Visit
            </motion.button>
          </Link>

          <Link to="/Accessibility">
            <motion.button 
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              type='button' 
              className='custom__button__rounded sm:mr-[40px] mt-[14px] sm:mt-0'
              >Accessibility
            </motion.button>
          </Link>

          <Link to="/GroupVisit">
            <motion.button 
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              type='button' 
              className='custom__button__rounded mt-[14px] sm:mt-0'
              >Group Visit
            </motion.button>
          </Link>

        </motion.div>  
      </motion.div>

    </section>
  )
}

export default Hero
