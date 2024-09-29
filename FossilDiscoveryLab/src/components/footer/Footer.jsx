import { footerlinks, socialMedia } from '../../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=''>

      <div className='grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-10 md:gap-20 mb-20 max-container padding-x padding-t'>

        {/* Location Section */}
        <div className='flex items-start flex-col'>
          <h1 className='text-semibold-21'>Location</h1>
          <p className='text-normal-16'>2700 Benjamin Franklin Pkwy</p>
          <p className='text-normal-16'>Philadelphia, PA, 19130</p>
          <p className='text-normal-16 underline'>215-763-8100</p>
          <button className='custom__button__bevel custom__button__medium mt-5'>Buy Tickets</button>
        </div>
 
        
          {/* Hours Section */}
          <div className='flex justify-start items-start flex-col'>
            <h1 className='text-semibold-21'>Hours</h1>
            <p className='text-normal-16'>Monday - Saturday: 8am-6pm</p>
            <p className='text-normal-16'>Sunday: 11am-5pm</p>
          </div>

          {/* Connect Section */}
          <div className='flex flex-1 flex-col justify-start'>
            <h1 className='text-semibold-21'>Connect</h1>
            <div className='flex'>
              {socialMedia.map((ssm) => (
                <div key={ssm.id} className=''>
                  <Link to={ssm.link}> 
                    <img src={ssm.icon} alt={ssm.id} className=''/>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        
          {/* Links Section */}
          <div className='flex flex-col justify-start gap-2  flex-wrap'>
              {footerlinks.map((link) => (
              <div key={link.id} className=''>
                <Link to={link.link}> 
                  <h1 className='text-semibold-21'>
                    {link.page}
                  </h1> 
                </Link>
              </div>
              ))}
          </div>

        
      </div>
      

      <hr className='bg-black bg-opacity-25 h-[2px] w-full border-0'/>

      <div className='flexStart padding-x max-container'>
        <div className='flex justify-between py-[10px]'>
          <p className='mr-2 sm:mr-5 font-inter text-[9px] sm:text-[12px] cursor-pointer'>Privacy Policy</p>
          <p className='mr-2 sm:mr-5 font-inter text-[9px] sm:text-[12px] cursor-pointer'>Join Us</p>
          <p className='mr-2 sm:mr-5 font-inter text-[9px] sm:text-[12px] cursor-pointer'>Terms of Service</p>
        </div>

        <div className='ml-auto '>
          <p className='mr-2 sm:mr-5 font-inter text-[9px] sm:text-[12px]'>© 2000-2024 Fossil Discovery Lab. All rights reserved.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
