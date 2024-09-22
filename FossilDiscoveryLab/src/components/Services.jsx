import { services } from '../constants';
import {  Assistance, Divider } from '../assets';

const Services = () => {
  return (
    <section className='relative'>

      <img src={Divider} alt='divider' className='w-full h-[273px] mt-[89px]'/>

      <h1 className='absolute left-[524px] top-[44px] text-flat text-center text-bold-48 max-w-[872px]'>
        We offer a variety of <span className='text-secondary text-center text-bold-48 underline'>services</span> 
        &nbsp;to serve the <span className='text-secondary text-center text-bold-48'>needs</span> of visitors.
      </h1>

      <div className='flexStart px'>   
        <div className='mt-[29px]'>
          {services.map((service) => (
          <div key={service.id} className='mt-7'>
              <h3 className="text-semibold-28 max-w-[523px]">
                {service.title}
              </h3>
              
            <p className="text-normal-21 text-mediumBlack max-w-[523px] mt-4">
              {service.content.split("help@fossildiscoverymuseum.org").map((part, index) => (
                <>
                  {part}
                  {index < service.content.split("help@fossildiscoverymuseum.org").length - 1 && (
                    <span className='text-secondary'>
                      help@fossildiscoverymuseum.org
                    </span>
                  )}
                </>
              ))}
            </p>


          </div>
          ))}

          <div>
            <button type='button' className='custom__button__open mt-8'>Accessibility</button>
          </div>
        
       </div>

       <div>
        <img src={Assistance} alt="assistance" className='w-[785px] absolute top-[200px]'/>
       </div>

      </div>
  
    </section>
  )
}

export default Services
