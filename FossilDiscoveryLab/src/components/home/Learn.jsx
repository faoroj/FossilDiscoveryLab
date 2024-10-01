import { learnmore } from '../../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Learn = () => {
  return (
    <section 
      id='learn-more'
      className='max-container'
    >

      <motion.h1 
        className='font-inter text-[32px] md:text-[48px] font-semibold leading-[150%]'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{ once: true, amount:1 }}
        transition={{ duration: 0.85, ease: 'easeInOut', delay: 0.1 }}
        >
        Learn More
      </motion.h1>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 ss:grid-cols-2 grid-cols-1 sm:gap-[32px] gap-12 mt-[50px]'>
        
          {learnmore.map((learn, i) => (

            <motion.div 
              key={learn.id} 
              className='flex flex-col h-[460px]'
              transition={{ duration: 0.4, ease: 'easeInOut', delay: 1 + (i*.1) }}
              initial={{ opacity: 0, y: 100 * (i+1) }} 
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true}}
            >
              <div className='w-full'>
                <img src={learn.image} alt={learn.title} className='w-[360px] h-[280px] object-cover'/>
              </div>

              <h3 className="text-bold-21 mt-3">
                {learn.title}
              </h3>

              <p className="text-normal-16 text-mediumBlack max-w-[250px] mt-1">
                {learn.content}
              </p>

              <div className="mt-auto">
                <Link to={learn.page}>
                  <p className="text-semibold-18 text-secondary mt-2 cursor-pointer hover:underline ">
                      {learn.link}
                  </p>
                </Link>
              </div> 
            </motion.div>
          ))}
        </div>

      
    </section>

  )
}

export default Learn
