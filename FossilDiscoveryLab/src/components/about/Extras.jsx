import { ExtraResources } from '../../constants';

const Extras = () => {
  return (
    <section id="extras" className='max-container'>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 sm:gap-[64px] gap-8'>

        {ExtraResources.map((extra) => (

          <div key={extra.id} className='flex flex-1 flex-col w-full max-sm:w-full'>

            <img src={extra.image} alt={extra.title} className='w-full h-[337px] object-cover'/>

            <h3 className="text-bold-18 max-w-[523px] mt-3">
              {extra.title}
            </h3>

            <p className="text-normal-16 text-mediumBlack max-w-[300px] mt-5">
              {extra.content}
            </p>

            <div className="mt-auto">
              <p className="text-medium-16 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline ">
                  {extra.link}
              </p>
            </div>
            
          </div>
        ))}

      </div>
    </section>

  )
}

export default Extras
