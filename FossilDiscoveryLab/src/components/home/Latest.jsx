import { Trex2 } from '../../assets';

const Latest = () => {
  return (
    <section className='px'>

      <div className='flex flex-row mt-[80px]'>

        <img src={Trex2} alt="Trex" className=" h-[458px] object-contain"/>
         

        <div className="flex justify-center item-start flex-col bg-white w-full px-[26px] pt-[30px] max-h-[608px]">

          <h3 className="text-bold-21 max-w-[523px] ml-3">
            Check out the latest edition to our collection
          </h3>

          <p className="text-normal-18 text-mediumBlack max-w-[523px] mt-[15px] ml-3">
            Explore the fascinating story behind our latest addition to the collection and how it came to be.
          </p>

          <div>
            <p className='underline underline-offset-[4px] text-secondary text-bold-18 mt-[37px] ml-3 cursor-pointer'>Read More</p>
          </div>
          
        </div>

      </div>

    </section>

  )
}

export default Latest
