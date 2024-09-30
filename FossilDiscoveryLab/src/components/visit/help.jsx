import { tips } from '../../constants';
import mobileMap from '../../assets/mobilemap.png';

const help = () => {
  return (
    <section className='max-container'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 lg:gap-[150px] md:gap-[100px] sm:gap-[60px]'>
        {tips.map((item, index) => (
          <div key={item.id} className='flex flex-col mt-9 md:mt-0 '>
            <h3 className='text-bold-21'>{item.title}</h3>
            <p className='text-normal-16 mt-3 max-w-full md:max-w-[400px]'>{item.content}</p>

            <div className='flexStart mt-auto'>

              {index === 1 ? (
                
                <a href={mobileMap} download="FDL_MobileMap.png">
                  <div className='flexCenter'>
                    <p className='text-semibold-16  text-secondary mr-3 mt-3'>{item.link}</p>
                    {item.icon && <img src={item.icon} alt={`${item.title} icon`} className='mt-3'/>}
                  </div>
                </a>
                
              ) : (
              <>
                <p className='text-semibold-16  text-secondary mr-3 mt-3'>{item.link}</p>
                {item.icon && <img src={item.icon} alt={`${item.title} icon`} className='mt-3'/>}
              </>
            )}
            </div>
          </div>
        ))}
      </div> 

      
    </section>
  )
}

export default help
