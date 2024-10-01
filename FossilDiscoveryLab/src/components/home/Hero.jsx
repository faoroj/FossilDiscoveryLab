import { hero, pointer } from '../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttons = [
  { label: 'Plan Your Visit', link: '/VisitUs', delay: 2 },
  { label: 'Accessibility', link: '/Accessibility', delay: 2.3 },
  { label: 'Group Visit', link: '/GroupVisit', delay: 2.6 },
];

const Hero = () => {
  return (
    <section id="home" className='flex md:flex-row flex-col relative'>
      <img 
        src={hero} 
        alt='hero' 
        className='flex-shrink-0 self-stretch w-full h-screen object-cover' 
      />

      <div className='padding absolute inset-0 flexCenter text-center flex-col mt-10'>
        <div className='flexCenter flex-col relative'>
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeInOut', delay: 1 }}
            className='font-inter font-bold leading-[150%] text-[38px] xs:text-[48px] text-flat relative'
          >
            <span className="relative">
              <img 
                src={pointer} 
                alt="pointer" 
                className='w-[39px] h-[39px] absolute left-[-50px] top-[32px] transform -translate-y-1/2 hidden sm:block' 
              /> 
              Welcome to The <span className='text-secondary'>Fossil</span> Discovery Lab
            </span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeInOut', delay: 1.5 }}
            className='font-inter font-medium leading-[150%] text-flat text-[21px] sm:text-[28px]'
          >
            Step Into a World Lost in Time
          </motion.h2>
        </div>

        <div className='flexCenter flex-col sm:flex-row mt-6 sm:mt-14'>
          {buttons.map((button, index) => (
            <Link key={index} to={button.link}>
              <motion.button
                type='button'
                className={`custom__button__rounded ${index !== 0 ? 'mt-[14px] sm:mt-0 sm:mr-[40px]' : 'sm:mr-[40px]'}`}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: button.delay }}
              >
                {button.label}
              </motion.button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

