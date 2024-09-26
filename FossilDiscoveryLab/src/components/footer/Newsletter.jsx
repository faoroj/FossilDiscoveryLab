import React from 'react'

const Newsletter = () => {
  return (
    <section className='relative w-full'>

      <div className='relative w-full'>

        <div className='bg-primary w-full h-[273px] object-cover'></div>
          <div className='padding-x absolute inset-0 flexCenter flex-col md:flex-row gap-5'>
          <h1 className='text-flat font-inter font-normal leading-[150%] text-[18px] ss:text-[25px] md:text-[28px]'>Sign Up For Our Newsletter</h1>
          
          <div className='rounded-[6px] border-[1px] w-[full] ss:w-[600px] h-[49px] mx-[37px] bg-flat border-grey'>
            <input 
              type="email"
              placeholder='Email Address'
              className='w-full flex-1 rounded-[6px] border border-black bg-flat h-[50px] pl-4 text-normal-16 focus:outline-none '
            />   
          </div>

          <button className='custom__button__bevel custom__button__medium'>Submit</button>
        </div>

      </div>

    </section>
  )
}

export default Newsletter
