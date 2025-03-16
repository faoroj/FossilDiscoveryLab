import { Googlemap } from '../../assets';
import { Directions } from '../../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const directions = () => {

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content).then(() => {  
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <motion.section 
      className='max-container'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{ once: true, amount: 0.13 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
    >

      <h1 className='font-semibold font-inter leader-[150%] text-[32px] md:text-[48px]'>Directions and Parking</h1>
      
      {/* <img src={Googlemap} alt='Google Map' className='w-full h-[250px] md:h-[450px] sm:h-[350px] object-cover mt-5'/> */}

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.912682369583!2d-75.1812594!3d39.965704900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7b42cc0082b%3A0x199af810631a91cf!2s2600%20Benjamin%20Franklin%20Pkwy%2C%20Philadelphia%2C%20PA%2019130!5e0!3m2!1sen!2sus!4v1742094244425!5m2!1sen!2sus" 
        className='w-full h-[250px] md:h-[450px] sm:h-[350px] object-cover mt-5'
        style={{border:0 }}
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        >
          
      </iframe>

      <hr className='bg-black h-[1px] border-0 mt-[20px]'/>

      <div className='flex flex-col md:flex-row justify-between items-start'>
        
        {Directions.map((parking, index) => (
            <div className='flex flex-col md:flex-row items-start md:items-center h-[140px] mt-8'>
              <div key={parking.id} className='flex flex-col h-[170px]'>

                  <div className='flex'>
                    <h3 className="text-bold-18 max-w-[523px] mt-1 mr-1">
                        {parking.title}
                    </h3>

                    <img 
                      src={parking.icon} 
                      alt={parking.title} 
                      className={index === 0 ? 'w-[21px] h-[27px] mt-1' : 'w-[30px] h-[30px] mt-[2px]'}
                    />
                  </div>

                  <p className="text-normal-16 text-mediumBlack max-w-[523px] mt-5">
                    {parking.content}
                  </p>

                  <div className="mt-auto">
                    {index === 0 ? (
                    <p 
                      className="text-medium-16 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline underline-offset-[6px]"
                      onClick={() => copyToClipboard(parking.content)}
                    >
                      {parking.link}
                    </p>
                    ) : index === 1 ? (
                      <a 
                        href={parking.page} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <p className="text-medium-16 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline underline-offset-[6px]">
                          {parking.link}
                        </p>
                      </a>
                    ) : (
                      <Link to={parking.page}>
                        <p className="text-medium-16 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline underline-offset-[6px]">
                          {parking.link}
                        </p>
                      </Link>
                      )}
                  </div>  
              </div>

              {index < 2 && (
                <div className='bg-black w-[1px] h-[200px] mx-6 hidden md:block'></div>
              )}

            </div>
            
          ))} 
      </div>

    </motion.section>
  )
}

export default directions
