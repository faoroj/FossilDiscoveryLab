import { exhibits } from '../../constants';
import { Rightarrow } from '../../assets';
import { motion } from 'framer-motion';

const animationVariants = {
  left: { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
};

const ExhibitCard = ({ image, title, content, index }) => (
  <motion.div 
    className='flex flex-col w-full max-w-full'
    {...animationVariants[index % 2 === 0 ? 'left' : 'right']}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 0.8 }} 
  >
    <div className='w-full'>
      <img src={image} alt="exhibit" className="w-full h-full object-cover" />
    </div>

    <div className="bg-white pt-6 flex flex-col flex-grow xxs:h-[300px]">
      <h3 className="text-bold-16 xxs:text-[21px] sm:text-[21px] text-mediumBlack px-6">
        {title}
      </h3>
      <p className="font-inter font-normal leading-[150%] text-[14px] xs:text-[16px] ss:text-[12px] md:text-[16px] text-mediumBlack px-6 mt-3">
        {content}
      </p>
      <div className='mt-auto mb-3 px-6'>
        <button type='button' className='custom__button__open mt-8'>Learn More</button>
      </div>
    </div>
  </motion.div>
);

const Exhibits = () => (
  <section className='max-container'>
    <motion.div className='flexBetween flex-col sm:flex-row'
      {...animationVariants.scale}
      viewport={{ once: true, amount:1 }}
      transition={{ duration: 0.85, ease: 'easeInOut', delay: 0.1 }}
    
    >
      <h1
        className='font-inter text-[21px] xxs:text-[32px] md:text-[48px] font-semibold leading-[150%]'
      >
        Explore our Exhibits
      </h1>

      <div
        className='flexCenter'
      >
        <p className='text-semibold-16 md:text-semibold-18 mr-2 cursor-pointer hover:underline'>View All</p>
        <img src={Rightarrow} alt='right arrow' className='h-[13px] w-[10px] hidden sm:block'/>
      </div>
    </motion.div>

    <div className='grid grid-cols-1 ss:grid-cols-2 gap-[20px] sm:gap-[80px] md:gap-[150px] mt-10 justify-items-center'>
      {exhibits.map((exhibit, index) => (
        <ExhibitCard key={exhibit.id} {...exhibit} index={index} />
      ))}
    </div>
  </section>
);

export default Exhibits;

