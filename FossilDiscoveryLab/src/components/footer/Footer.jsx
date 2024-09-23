import { footerlinks, socialMedia } from '../../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='h-[400px]'>
      <div className='flex justify-between items-center'>
        <div className='pl-[340px]'>
          <h1 className='text-semibold-21'>Location</h1>
          <p className='text-normal-16'>2700 Benjamin Franklin Pkwy</p>
          <p className='text-normal-16'>Philadelphia, PA, 19130</p>
          <p className='text-normal-16 underline'>215-763-8100</p>
          <button className='custom__button__bevel custom__button__medium mt-4'>Buy Tickets</button>
        </div>

        <div className='w-[1170px] h-[448px] bg-white flex justify-start items-center'>
          <div className='pl-[35px]'>
            <h1 className='text-semibold-21'>Hours</h1>
            <p className='text-normal-16'>Monday - Saturday: 8am - 6pm</p>
            <p className='text-normal-16'>Sunday: 11am-5pm</p>
          </div>

          <div className='flex flex-col ml-[110px]'>
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

          <div className='ml-[170px] pr-[340px]'>
            <div className='flex flex-col'>
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
        </div>
      </div>

      <hr className='bg-black bg-opacity-25 h-[2px] border-0'/>

      <div className='flexStart'>
        <div className='flex justify-between px py-[10px]'>
          <p className='mr-5 font-inter text-[12px] cursor-pointer'>Privacy Policy</p>
          <p className='mr-5 font-inter text-[12px] cursor-pointer'>Join Us</p>
          <p className='mr-5 font-inter text-[12px] cursor-pointer'>Terms of Service</p>
        </div>

        <div className='ml-auto mr-[340px]'>
          <p className='mr-5 font-inter text-[12px]'>© 2000-2024 Fossil Discovery Lab. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
