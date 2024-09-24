import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-primary w-full h-[160px]'>
      <div className='flexCenter py-[60px] px-[320px]'>

        <h1 className='text-flat text-normal-28'>Sign Up For Our Newsletter</h1>
        
        <div className='rounded-[6px] border-[1px] w-[600px] h-[49px] mx-[37px] bg-flat border-grey'>
          <p className='pl-[16px] py-[12px] text-medium-16'>Email Address</p>
        </div>

        <button className='custom__button__bevel custom__button__medium'>Submit</button>

      </div>
    </section>
  )
}

export default Newsletter
