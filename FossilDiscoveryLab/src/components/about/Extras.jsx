import { ExtraResources } from '../../constants';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const Extras = () => {
  return (
    <section id="extras" className='max-container'>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 sm:gap-[64px] gap-8'>

        {ExtraResources.map((extra, index) => (

          <motion.div 
            key={extra.id} 
            className='flex flex-1 flex-col w-full max-sm:w-full'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1 * index, duration: 0.6, ease: 'easeInOut' }}
          >

            <motion.img 
              src={extra.image} 
              alt={extra.title} 
              className='w-full h-[337px] object-cover'
              variants={imageVariants}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.1 }}
            />

            <motion.div
              variants={contentVariants}
              transition={{ delay: 1.1, duration: 0.5, ease: 'easeInOut',  }}
            >
              <h3 className="text-bold-18 max-w-[523px] mt-3">
                {extra.title}
              </h3>

              <p 
                className="text-normal-16 text-mediumBlack max-w-[300px] mt-5">
                {extra.content}
              </p>

              <div className="mt-auto">
                <p className="text-medium-16 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline ">
                    {extra.link}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}

      </div>
    </section>

  )
}

export default Extras
