import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { sanitize } from '../../../utils/misc';
import Loading from '../loading';


const Newsletter = ({ status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }


  const animationVariants = {  
    left: { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 } },
    trans: {transition: { type: 'spring', damping: 18, mass: 0.75, delay: 0.7 } } 
};


  return (
    <section className='relative w-full'>

      <div className='relative w-full'>

        <motion.div 
          className='bg-primary w-full h-[180px] xxs:h-[273px] object-cover'
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{ once: true, }}
          transition={{ duration: 0.85, ease: 'easeInOut', delay: 0.1 }}
        >
        </motion.div>

        <div className='padding-x max-container absolute inset-0 flex items-center justify-center md:justify-between flex-col md:flex-row gap-5 '>
          <motion.h1 
            className='text-flat font-inter font-normal leading-[150%] text-[16px] xxs:text-[24px] '
            {...animationVariants.left}
            {...animationVariants.trans}
            viewport={{ once: true }}
          >Sign Up For Our Newsletter
          </motion.h1>
        
        
          <motion.input 
            onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"
            placeholder='Email Address'
            className='w-full ss:w-[600px] rounded-[6px] border border-black bg-flat h-[30px] xxs:h-[50px] pl-4 text-normal-16 focus:outline-none'
            onKeyUp={(event) => handleInputKeyEvent(event)}
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{ once: true, amount:1 }}
            transition={{ duration: 0.85, ease: 'easeInOut', delay: 0.9}}
          />   
        

          <motion.button 
            type="button" 
            className='custom__button__bevel custom__button__medium'
            onClick={handleFormSubmit}
            {...animationVariants.right}
            {...animationVariants.trans}
            viewport={{ once: true }}
          >Submit
          </motion.button>
        </div>
      </div>

      <div className="min-h-42px">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-green-200 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
      </div>

    </section>
  );
}

export default Newsletter
