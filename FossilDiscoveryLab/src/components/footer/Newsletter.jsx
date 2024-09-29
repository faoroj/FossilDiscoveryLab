import React from 'react'

const Newsletter = () => {
  return (
    <section className='relative w-full'>

      <div className='relative w-full'>

        <div className='bg-primary w-full h-[180px] xxs:h-[273px] object-cover'></div>
          <div className='padding-x max-container absolute inset-0 flex items-center justify-center md:justify-between flex-col md:flex-row gap-5 '>
            <h1 className='text-flat font-inter font-normal leading-[150%] text-[16px] xxs:text-[24px] '>Sign Up For Our Newsletter</h1>
          
          
            <input 
              type="email"
              placeholder='Email Address'
              className='w-full ss:w-[600px] rounded-[6px] border border-black bg-flat h-[30px] xxs:h-[50px] pl-4 text-normal-16 focus:outline-none '
            />   
          

          <button type="button" className='custom__button__bevel custom__button__medium '>Submit</button>
        </div>

      </div>

    </section>
  )
}

export default Newsletter
