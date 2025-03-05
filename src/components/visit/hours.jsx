import { Hoursimg, Clock } from '../../assets';
import { motion } from 'framer-motion';

const textBase = 'font-inter leading-[150%] text-center';
const textBold = `${textBase} font-bold text-secondary text-[18px] ss:text-[21px]`;
const textNormal = `${textBase} font-normal text-[16px] ss:text-[16px]`;
const textItalic = `${textBase} font-normal text-[12px] ss:text-[16px] italic`;

const hours = () => {
  return (
    <motion.section 
      id="hours" 
      className='max-container mt-[108px]'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{ once: true, amount:.5 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
    >

      <div className='flex flex-col md:flex-row items-stretch'> 

        {/* Left: Image Section */}
        <div className='flex-1'>
          <img src={Hoursimg} alt="Museum" className=" h-[250px] ss:h-[450px] md:h-[550px] w-full object-cover md:w-[750px]"/> 
        </div>

        {/* Right: Content Section */}
        <div className="bg-gray-200 flex-1 h-[550px] w-full flex flex-col items-center justify-center md:w-[750px] p-4"> 
                  {/* Title and Clock */}
              <div className='flexCenter'>
                <h3 className="font-inter text-[28px] ss:text-[38px] font-bold max-w-[523px] ml-3">Hours</h3>
                <img src={Clock} alt="Clock" className="w-[34px] ss:w-[44px] h-[34px] ss:h-[42px] ml-2"/>
              </div>

              {/* Opening Hours */}
              <p className="font-inter font-semibold leading-[150%] text-[18px] ss:text-[21px] max-w-[523px] mt-[15px] relative inline-block underline text-center underline-offset-[6px]">
                Open daily 8am-6pm
              </p>

              <p className={textBold + ' mt-5'}>Prehistoric Palate Cafe</p>
              <p className={textNormal + ' mt-1'}>Lunch offered daily 11am-4pm</p>
              <p className={textBold + ' mt-[15px] ss:mt-[40px]'}>Holiday Hours</p>
              <p className={textNormal + ' mt-1'}>Thanksgiving | Closed</p>
              <p className={textNormal + ' mt-1'}>Christmas Day | Closed</p>
              <p className={textNormal + ' mt-1'}>New Year's Day | Closed</p>
              <p className={textItalic + ' mt-[20px] ss:mt-[40px]'}>
                Galleries are busiest on weekday mornings due to school trips
              </p>

        </div>

      </div>
    </motion.section>
  )
}
export default hours
