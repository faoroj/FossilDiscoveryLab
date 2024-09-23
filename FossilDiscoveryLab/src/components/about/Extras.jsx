import { ExtraResources } from '../../constants';

const Extras = () => {
  return (
    <section className='px mt-[103px]'>

          <div className='flex flex-row justify-between items-start space-x-[72px] mt-7 max-w-[1200px]'>

            {ExtraResources.map((extra) => (

              <div key={extra.id} className='flex flex-col mb-[100px] h-[550px]'>

                <img src={extra.image} alt={extra.title} className='w-full h-auto'/>

                <h3 className="text-bold-21 max-w-[523px] mt-3">
                  {extra.title}
                </h3>

                <p className="text-normal-21 text-mediumBlack max-w-[523px] mt-5">
                  {extra.content}
                </p>

                <div className="mt-auto">
                  <p className="text-medium-21 text-secondary max-w-[523px] mt-2 cursor-pointer hover:underline ">
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
