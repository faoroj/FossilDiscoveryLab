import { tips } from '../../constants';

const help = () => {
  return (
    <section className='flexBetween px pt-[180px]'>
      
      {tips.map((item) => (
        <div key={item.id}>
          <h3 className='text-bold-28'>{item.title}</h3>
          <p className='text-normal-21 mt-5 max-w-[300px]'>{item.content}</p>

          <div className='flexStart mt-5'>
            <p className='text-normal-21 text-secondary mr-3'>{item.link}</p>
            {item.icon && <img src={item.icon} alt={`${item.title} icon`} />}
          </div>

        </div>
    ))}


      
    </section>
  )
}

export default help
