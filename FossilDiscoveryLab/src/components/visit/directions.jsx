import { Googlemap } from '../../assets';
import { Directions } from '../../constants';

const directions = () => {
  return (
    <section className='flex flex-col px mt-[102px]'>

      <h1 className='text-semibold-48'>Directions and Parking</h1>
      <img src={Googlemap} alt='Google Map' className='w-[1240px] h-[435px] mt-5'/>
      <hr className='bg-black h-[1px] border-0 mt-[20px]'/>

      <div className='flex flex-row justify-between items-start space-x-[72px] mt-5 max-w-[1200px]'>
        
        {Directions.map((parking) => (

            <div key={parking.id} className='flex flex-col mb-[120px] h-[200px]'>

                <div className='flex'>
                  <h3 className="text-bold-21 max-w-[523px] mt-1 mr-1">
                      {parking.title}
                  </h3>
                  <img src={parking.icon} alt={parking.title} className='w-[30px] h-[30px]'/>
                </div>

                <p className="text-normal-21 text-mediumBlack max-w-[523px] mt-5">
                  {parking.content}
                </p>

                <div className="mt-auto">
                  <p className="text-medium-21 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline ">
                    {parking.link}
                  </p>
                </div>
                
            </div>
            
          ))}
        
      </div>

    </section>
  )
}

export default directions
