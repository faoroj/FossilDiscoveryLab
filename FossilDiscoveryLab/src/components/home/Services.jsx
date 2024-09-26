import { services } from '../../constants';
import {  Assistance, Divider } from '../../assets';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className='relative w-full'>
      
      <div className='relative w-full'>

        <img src={Divider} alt="divider" className="w-full h-[273px] object-cover" />

        <div className='padding absolute inset-0 flexCenter text-center'>
          <h1 className='text-[32px] md:text-[48px] ss:text-[42px] font-bold font-inter leading-[150%] text-flat max-w-[800px]'>
            We offer a variety of <span className="text-secondary underline">services</span> 
            &nbsp;to serve the <span className="text-secondary">needs</span> of visitors.
          </h1>
        </div>

      </div>
 
      <div className='max-container px-8 sm:px-0 grid grid-cols-1 sm:grid-cols-2'>  

        <div className='mt-[29px]'>
          {services.map((service) => (
          <div key={service.id} className='mt-7'>
              <h3 className="text-bold-21 max-w-[523px]">
                {service.title}
              </h3>
              
            <p className="text-normal-18 text-mediumBlack max-w-[623px] mt-4">
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

          <Link to="/Accessibility">
            <div>
              <button type='button' className='custom__button__open mt-8'>Accessibility</button>
            </div>
          </Link>
          
        </div>

       
        <div className='flex justify-center mt-10 sm:mt-0'>
          <img src={Assistance} alt="assistance" className='w-full h-auto max-w-full object-contain'/>
        </div>
       

      </div>
  
    </section>
  )
}

export default Services
