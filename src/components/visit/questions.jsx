import { QuestionMark } from '../../assets';
import { FrequentQuestions } from '../../constants';
import { useState } from 'react';
import { motion } from 'framer-motion';

const questions = () => {

  const [collapsedItems, setCollapsedItems] = useState({});
  const toggleCollapse = (index) => {
    setCollapsedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  
    const lineVariants = {
      hiddenLeft: { width: 0 },  
      hiddenRight: { width: 0 }, 
      visibleLeft: { width: '547px', amount: 1, transition: { duration: 1 } },
      visibleRight: { width: '547px', amount: 1, transition: { duration: 1 } }
    };
  
    const questionMarkVariants = {
      initial: { opacity:1, scale: 1 },
      pulse: {
        scale: [1, 1.2, 1],
        transition: {
          delay: 1.5, 
          duration: 0.6,
          repeat: 2, 
          repeatType: 'reverse'
        }
      }
    };

  return (
    <section className='max-container'>

      <div className='flexCenter'>
        <motion.div 
          className='bg-secondary h-[4px] w-[547px] border-0'
          variants={lineVariants}
          initial="hiddenLeft"
          whileInView="visibleLeft"
          viewport={{ once: true, amount: 1}}
        >
        </motion.div>

          <motion.img 
            src={QuestionMark} 
            alt='Question Mark' 
            className='w-[101px] h-[176px]'
            variants={questionMarkVariants}
            initial="initial"
            whileInView="pulse"
          />

        <motion.div 
          className='bg-secondary h-[4px] w-[547px] border-0'
          variants={lineVariants}
          initial="hiddenRight"
          whileInView="visibleRight"
          viewport={{ once: true, amount: 1}}
        >
        </motion.div>
      </div>

      <h1 className='font-semibold font-inter leader-[150%] text-[32px] md:text-[48px] mt-[60px] md:mt-[110px]'>Frequently Asked Questions</h1>
      <div className="w-[173px] h-[1px] bg-primary mt-[29px]"></div>

      <div className='flex flex-col mt-3'>
        
        {FrequentQuestions.map((item, index) => (

            <div key={item.id} className='flex flex-col mt-6'>

                <div className='bg-black h-[1px] w-full mt-4 mb-2'></div>
                <div className='flexBetween'>
                  <p className="text-semibold-16">
                      {item.question}
                  </p>
                  <img src={item.icon} alt={item.title} className='w-[34px] h-[34px] cursor-pointer' onClick={() => toggleCollapse(index)}/>
                </div>

                {collapsedItems[index] && (
                <div className="px-5">
                  <p className='text-normal-16'>{item.answer}</p>
                </div>
                )}

            </div>
            
          ))}
        
      </div>

    </section>
  )
}

export default questions
