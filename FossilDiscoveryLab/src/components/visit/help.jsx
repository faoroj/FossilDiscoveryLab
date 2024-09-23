import { tips } from '../../constants';

const help = () => {
  return (
    <section className='flexBetween px pt-[200px]'>
      
      {tips.map((item) => (
        <div key={item.id} className='flex flex-col h-[200px]'>
          <h3 className='text-bold-21'>{item.title}</h3>
          <p className='text-normal-18 mt-3 max-w-[300px]'>{item.content}</p>

          <div className='flexStart mt-auto'>
            <p className='text-semibold-18 text-secondary mr-3'>{item.link}</p>
            {item.icon && <img src={item.icon} alt={`${item.title} icon`} />}
          </div>

        </div>
    ))}


      
    </section>
  )
}

export default help
