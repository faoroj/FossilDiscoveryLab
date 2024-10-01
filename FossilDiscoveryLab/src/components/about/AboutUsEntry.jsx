import { dinohead } from '../../assets';
import { motion } from 'framer-motion';

const AboutUsEntry = () => {
  return (
    <section id='About-Us-Entry'className='max-container mt-[108px]'>

      <div className='flex items-start justify-between flex-col custom:flex-row'>
        <motion.div 
          className='flex-1'
          initial= {{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 0.8 }} 
        >
            <h1 className='text-[32px] sm:text-[48px] font-inter font-semibold leading-[150%]'>About Us</h1>
            <div className="w-[173px] h-[1px] bg-primary mt-[30px]"></div>
            <p className='text-normal-16 font-inter font-normal mt-[30px]'>
                At the Fossil Discovery Lab, we are passionate storytellers of the Earth's ancient history. 
                Founded by a team of dedicated paleontologists and enthusiasts, we strive to create an immersive 
                experience that transports visitors back in time to when dinosaurs roamed the planet. Our museum 
                is a treasure trove of remarkable fossils, each with its own tale of survival, adaptation, and extinction. 
                Whether you're a seasoned fossil enthusiast or a curious explorer, join us on a journey through millions of years, 
                where you'll uncover the wonders of paleontology and the awe-inspiring world of dinosaurs.
            </p>
        </motion.div>
        
        <motion.div 
          className='flex-1 flex justify-center items-center'
          initial= {{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 0.8 }} 
        >
          <img src={dinohead} alt='dinohead' className='h-auto max-h-[400px] custom:max-h-[700px]'/>
        </motion.div>

      </div>
      
    </section>
  )
}

export default AboutUsEntry
