import { Admission } from '../../constants';
import { motion } from 'framer-motion';


const admission = () => {
  return (
    <section className='max-container'>

      <div className='flexBetween flex-col md:flex-row gap-4 md:gap-10'>

        {/* Left Content */}
        <motion.div 
          className='w-full md:w-[50%]'
          initial= {{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 0.8 }} 
        
        >
          <h1 className='font-semibold font-inter leader-[150%] text-[32px] md:text-[48px]'>General Admission</h1>
          <p className='text-normal-16 mt-[15px]'>
            Plan your visit to our Dinosaur Fossil Museum today! 
            Explore the ancient world of dinosaurs with our affordable 
            admission rates for individuals and families. Immerse yourself 
            in a journey through time, marvel at our impressive collection 
            of fossils, and enjoy an educational experience like no other. 
            Whether you're a seasoned paleontology enthusiast or a curious 
            explorer, we welcome you to discover the wonders of the dinosaur 
            kingdom with us.
          </p>
          <button type='button' className='custom__button__bevel custom__button__medium mt-[20px]'>Buy Tickets</button>
        </motion.div>

        {/* Right Content */}
        <div className='flex flex-col justify-end items-end w-full md:w-[50%] mt-2 md:mt-0'>
          {Admission.map((admiss, index) => (
          <motion.div 
            key={admiss.id} 
            className='flexBetween mb-[15px] bg-white w-full lg:w-[584px] h-[60px] pl-[16px] pr-[25px] pt-1'
            initial= {{ opacity: 0, x: 50, y:-25 * (index+1) }}
            whileInView={{ opacity: 1, y: 0, x:0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 1 + (index * .1) }} 
          >
              <div className='flex '>
                <h3 className="text-bold-16 max-w-[523px] ">
                    {admiss.age}
                </h3>
              </div>

              <div className='flex '>
                <h3 className="text-bold-16 max-w-[523px] text-right">
                    {admiss.cost}
                </h3>
              </div>
          </motion.div>
          ))}
        </div>
        
      </div>


    </section>
  )
}

export default admission
