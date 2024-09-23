import { Googlemap } from '../../assets';
import { Directions } from '../../constants';
import { Link } from 'react-router-dom';

const directions = () => {
  return (
    <section className='flex flex-col px mt-[150px] mb-[150px]'>

      <h1 className='text-semibold-48'>Directions and Parking</h1>
      <img src={Googlemap} alt='Google Map' className='w-[1240px] h-[435px] mt-5'/>
      <hr className='bg-black h-[1px] border-0 mt-[20px]'/>

      <div className='flex  items-start   max-w-[1200px]'>
        
        {Directions.map((parking, index) => (
            <div className='flex'>
              <div key={parking.id} className='flex flex-col h-[170px] mt-3'>

                  <div className='flex'>
                    <h3 className="text-bold-18 max-w-[523px] mt-1 mr-1">
                        {parking.title}
                    </h3>

                    <img 
                      src={parking.icon} 
                      alt={parking.title} 
                      className={index === 0 ? 'w-[21px] h-[27px] mt-1' : 'w-[30px] h-[30px] mt-[2px]'}
                    />
                  </div>

                  <p className="text-normal-18 text-mediumBlack max-w-[523px] mt-5">
                    {parking.content}
                  </p>

                  <div className="mt-auto">
                    <Link to={parking.page}>
                      <p className="text-medium-18 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline underline-offset-[6px]">
                        {parking.link}
                      </p>
                    </Link>
                  </div>
                  
              </div>

              {index < 2 && (
                <div className='bg-black w-[1px] h-[200px] mx-6'></div>
              )}

            </div>
            
          ))} 
      </div>

    </section>
  )
}

export default directions
