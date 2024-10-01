import { services } from '../../constants';
import {  Assistance, Divider } from '../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className='relative w-full'>
      
      {/*Divider Image */}
      <motion.div 
        className='relative w-full'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
      >
        <img src={Divider} alt="divider" className="w-full h-[150px] xs:h-[273px] object-cover" />

        <div className='padding absolute inset-0 flexCenter text-center'>
          <h1 className='text-[16px] xxs:text-[21px] xs:text-[30px] ss:text-[36px] sm:text-[32px] md:text-[48px] font-bold font-inter leading-[150%] text-flat max-w-[800px]'>
            We offer a variety of <span className="text-secondary underline">services</span> 
            &nbsp;to serve the <span className="text-secondary">needs</span> of visitors.
          </h1>
        </div>
      </motion.div>
 

      <div className='max-container padding-x grid grid-cols-1 custom:grid-cols-2 '>  
        <motion.div className='mt-0 custom:mt-[29px] order-last custom:order-first'>
          {services.map((service, index) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay:1 + (index * .3) }}
            className='mt-7'
          >
              <h3 className="text-bold-21 max-w-[523px]">
                {service.title}
              </h3>
              
            <p className="text-normal-16 text-mediumBlack max-w-[623px] mt-4">
              {service.content.split("help@fossildiscoverymuseum.org").map((part, index) => (
                <>
                  {part}
                  {index < service.content.split("help@fossildiscoverymuseum.org").length - 1 && (
                    <span className='text-secondary break-words whitespace-normal'>
                      help@fossildiscoverymuseum.org
                    </span>
                  )}
                </>
              ))}
            </p>
          </motion.div>
          ))}

          <Link to="/Accessibility">
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay:2 }}
            >
              <button type='button' className='custom__button__open mt-8'>Accessibility</button>
            </motion.div>
          </Link>
          
        </motion.div>

       
        <motion.div 
          className='flex justify-center  sm:mt-0'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
        >
          <img src={Assistance} alt="assistance" className='w-full h-[auto] max-w-[600px] -mt-3 xxs:-mt-8 xs:-mt-16 sm:-mt-18 object-contain z-10'/>
        </motion.div>
       

      </div>
  
    </section>
  )
}

export default Services
