import { learnmore } from '../../constants';
import { Link } from 'react-router-dom';

const Learn = () => {
  return (
    <section className='px bg-white mt-[103px]'>
      <h1 className='text-normal-48 pt-[81px]'>
        Learn More
      </h1>

      <div className='flex flex-row justify-between items-start space-x-[72px] mt-7 max-w-[1200px]'>

        {learnmore.map((learn) => (

          <div key={learn.id} className='flex flex-col mb-[120px] h-[450px]'>

            <img src={learn.image} alt={learn.title} className='w-full h-auto'/>

            <h3 className="text-bold-21 max-w-[523px] mt-3">
              {learn.title}
            </h3>

            <p className="text-normal-18 text-mediumBlack max-w-[523px] mt-1">
              {learn.content}
            </p>

            <div className="mt-auto">
              <Link to={learn.page}>
                <p className="text-medium-21 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline ">
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
