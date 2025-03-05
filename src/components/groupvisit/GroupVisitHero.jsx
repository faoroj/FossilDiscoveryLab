import React from 'react'
import { motion } from 'framer-motion';

const GroupVisitHero = () => {
  return (
    <motion.section 
      id="Group-Visit-Hero" 
      className='max-container mt-[108px]'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{ once: true, amount:1 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}

    >

        <h1 className='text-[32px] sm:text-[48px] font-inter font-semibold leading-[150%]'>Book a Group Visit</h1>
        <div className="w-[173px] h-[1px] bg-primary mt-[3px]"></div> 

        <p className='text-normal-21 max-w-[800px] mt-[30px]'>
            For group visits of 20 or more we offer a rate of 12$ per person.
            In order to be eligible:
        </p>

        <ul className='list-disc list-outside text-normal-16 mt-[20px] ml-[40px] max-w-[900px]'>
            <li>Reservations should be made 2 weeks in advanced </li>
            <li>Accepted credit cards are American Express, Discover, MasterCard, and Visa  </li>
            <li>On the day of your visit all members of group will be required to arrive at the same time </li>
            <li>For any further questions or assistance please email <span className='underline font-semibold underline-offset-[6px] break-words whitespace-normal'>scheduling@fossildiscoverylab.org </span> 
                or call <span className='underline font-semibold underline-offset-[6px]'>215-763-8100</span> 
            </li>
        </ul>
    </motion.section>
  )
}

export default GroupVisitHero
