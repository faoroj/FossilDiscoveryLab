import { collection } from '../../assets';

const MissionStatement = () => {
  return (
    <section id="Mission-Statement" className='max-container'>

      <div className="flex flex-col">
          <h1 className='text-semibold-48'>Mission Statement</h1>
          <p className='text-normal-18 mt-[29px]'>
            Our mission is to inspire curiosity, ignite imaginations, 
            and educate visitors of all ages about the fascinating history 
            of Earth's most magnificent creatures. Dive into the prehistoric 
            past with us, where every fossil tells a story, and every visit 
            sparks a new adventure in learning and discovery."
          </p>
      </div>
      
      <div className='relative mt-[35px]'>

        <img src={ collection } alt='collection' className='w-full h-[212px] sm:h-auto object-cover'/>
        
        <div className='absolute inset-0 flex justify-center items-center'>
          <h1 className='font-extrabold font-inter text-flat text-center' style={{ fontSize: 'clamp(21px, 5vw, 64px)' }}>The Collection</h1>
        </div>

      </div>

      <div className="mt-[35px]">
        <p className='text-normal-18'>
          From the mighty Tyrannosaurus rex to the graceful Pteranodon, our exhibits showcase a 
          wide range of dinosaur species that once ruled the ancient landscapes. Marvel at the 
          perfectly preserved skeletons, fossilized footprints, and rare artifacts that provide 
          glimpses into the daily lives of these magnificent creatures. Each specimen in our collection 
          tells a unique story of evolution, survival, and the mysteries of the past.
        </p>

        <p className='text-bold-18 text-secondary mt-[28px] hover:cursor-pointer hover:underline'>
          View Our Collection &gt;
        </p>
      </div>

    </section>
  )
}

export default MissionStatement
