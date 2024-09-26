import { tips } from '../../constants';

const help = () => {
  return (
    <section className='max-container'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-5'>
        {tips.map((item) => (
          <div key={item.id} className='flex flex-col mt-9 md:mt-0 '>
            <h3 className='text-bold-21'>{item.title}</h3>
            <p className='text-normal-18 mt-3 max-w-full md:max-w-[400px]'>{item.content}</p>

            <div className='flexStart mt-auto'>
              <p className='text-semibold-18 text-secondary mr-3 mt-3'>{item.link}</p>
              {item.icon && <img src={item.icon} alt={`${item.title} icon`} className='mt-3'/>}
            </div>
          </div>
        ))}
      </div> 

      
    </section>
  )
}

export default help
