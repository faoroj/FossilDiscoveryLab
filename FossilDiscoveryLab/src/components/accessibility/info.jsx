import { serviceDogsPolicy, signLanguagePolicy } from '../../constants';
import { Map } from '../../assets';
import mobileMap from '../../assets/mobilemap.png';
import { motion } from 'framer-motion';

const info = () => {
  return (
    <motion.section 
      className='max-container'
      initial= {{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 0.8, staggerChildren: 1, delayChildren: 1   }} 
    >

      {/* Parking */}
      <h1 className='text-bold-21'>Parking</h1>
      <p>The museum has accessibile parking available along with ramps elevators 
        and hallways designed to be accessible to wheelchairs and other mobility aids.
      </p>


      {/* Service Dogs Policy */} 
      <h2 className="text-bold-21 mt-[35px] ss:mt-[45px] md:mt-[80px]">{serviceDogsPolicy.title}</h2>
      <p className="mt-2">{serviceDogsPolicy.introduction}</p>
      <h3 className="text-semibold-16 mt-6">Responsibilities of the Handler:</h3>
        <ul className="list-disc list-outside ml-[40px] mt-2">
          {serviceDogsPolicy.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      <h3 className="text-semibold-16 mt-6">Exclusions:</h3>
        <ul className="list-disc list-outside ml-[40px] mt-2">
          {serviceDogsPolicy.exclusions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      
      {/* Audio Induction Loops */}  
      <h1 className='text-bold-21 mt-[35px] ss:mt-[45px] md:mt-[80px]'>Audio Induction Loops</h1>
      <p>
        Visitors who would benefit from the audio induction loop system are invited to request a 
        receiver at the information desk. Our staff will be happy to assist in setting up the device 
        for optimal listening comfort.
      </p>
      
      {/* Free Wi-fi */}  
      <h1 className='text-bold-21 mt-[35px] ss:mt-[45px] md:mt-[80px]'>Free Wi-fi</h1>
      <p>
        We are pleased to offer free WiFi access to enhance your visit and provide convenience 
        during your stay.
      </p>

      {/* Sign Language Interpreters */}   
      <h2 className="text-bold-21 mt-[35px] ss:mt-[45px] md:mt-[80px]">{signLanguagePolicy.title}</h2>
      <p className="mt-2">{signLanguagePolicy.introduction}</p>
      <h3 className="text-semibold-16 mt-6">Requesting a Sign Language Interpreter:</h3>
        <ul className="list-disc list-outside ml-[40px] mt-2">
          {signLanguagePolicy.requesting.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className="list-disc list-outside ml-[80px]">
          {signLanguagePolicy.requesting2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      {/* Mobile Map */}
      <h1 className='text-bold-21 mt-[35px] ss:mt-[45px] md:mt-[80px]'>Mobile Map</h1>
      <p>
        Download our mobile map and guide to help find your away around the building.
      </p>
      
      <a href={mobileMap} download="FDL_MobileMap.png">
        <div className='inline-flex items-center mt-3 cursor-pointer'>
          <p className='text-secondary font-semibold font-inter'>Download Here</p>
          <img src={Map} alt="Map" className='ml-2 '></img>
        </div>
      </a>
    </motion.section>
  )
}

export default info
