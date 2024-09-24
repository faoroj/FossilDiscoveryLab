import { learnmore } from '../../constants';
import { Link } from 'react-router-dom';

const Learn = () => {
  return (
    <section 
    id='learn-more'
    className='max-container'>

      <h1 className='font-inter text-[38px] font-semibold leading-[150%] ml-[75px]'>
        Learn More
      </h1>

      <div className='flex flex-row justify-around items-start mt-[50px] '>
        
          {learnmore.map((learn) => (

            <div key={learn.id} className='flex flex-col mb-[120px] h-[380px]'>
              <div className='w-full'>
                <img src={learn.image} alt={learn.title} className='w-[250px] h-[190px] object-cover'/>
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
