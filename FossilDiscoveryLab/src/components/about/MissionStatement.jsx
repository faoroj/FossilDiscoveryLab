import { collection } from '../../assets';

const MissionStatement = () => {
  return (
    <section>

      <div className="flex flex-col px mt-[55px]">
        <h1 className='text-semibold-48'>Mission Statement</h1>
        <p className='text-normal-21 mt-[29px]'>
          Our mission is to inspire curiosity, ignite imaginations, 
          and educate visitors of all ages about the fascinating history 
          of Earth's most magnificent creatures. Dive into the prehistoric 
          past with us, where every fossil tells a story, and every visit 
          sparks a new adventure in learning and discovery."
        </p>

        <div className='relative'>
          <img src={ collection } alt='collection' className='w-[1239px] h-[458px] mt-[35px]'/>
          <h1 className='text-[64px] font-extrabold font-inter text-flat text-center absolute inset-0 top-[200px]'>The Collection</h1>
        </div>

        <p className='text-normal-21 mt-[35px]'>
          From the mighty Tyrannosaurus rex to the graceful Pteranodon, our exhibits showcase a 
          wide range of dinosaur species that once ruled the ancient landscapes. Marvel at the 
          perfectly preserved skeletons, fossilized footprints, and rare artifacts that provide 
          glimpses into the daily lives of these magnificent creatures. Each specimen in our collection 
          tells a unique story of evolution, survival, and the mysteries of the past.
        </p>

        <p className='text-bold-21 text-secondary mt-[28px] hover:cursor-pointer hover:underline'>
          View Our Collection &gt;
        </p>

      </div>

    </section>
  )
}

export default MissionStatement
