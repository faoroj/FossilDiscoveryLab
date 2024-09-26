import { learnmore } from '../../constants';
import { Link } from 'react-router-dom';

const Learn = () => {
  return (
    <section 
      id='learn-more'
      className='max-container'
    >

      <h1 className='font-inter text-[32px] md:text-[48px] font-semibold leading-[150%]'>
        Learn More
      </h1>

      <div className='grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 sm:gap-[64px] gap-12 mt-[50px]'>
        
          {learnmore.map((learn) => (

            <div key={learn.id} className='flex flex-col h-[460px] sm:h-[550px] custom:h-[530px] md:h-[520px] lg:h-[480px]'>
              <div className='w-full'>
                <img src={learn.image} alt={learn.title} className='w-[360px] h-[280px] object-cover'/>
              </div>

              <h3 className="text-bold-21 mt-3">
                {learn.title}
              </h3>

              <p className="text-normal-16 text-mediumBlack max-w-[250px] mt-1">
                {learn.content}
              </p>

              <div className="mt-auto">
                <Link to={learn.page}>
                  <p className="text-semibold-18 text-secondary mt-2 cursor-pointer hover:underline ">
                      {learn.link}
                  </p>
                </Link>
              </div> 
            </div>
          ))}
        </div>

      
    </section>

  )
}

export default Learn
