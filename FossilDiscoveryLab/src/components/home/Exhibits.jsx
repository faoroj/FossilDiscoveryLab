import { exhibits } from '../../constants';

const ExhibitCard = ({ image, title, content, }) => (
  <div className='flex flex-col w-full max-w-full'>

    <div className='w-full'>
      <img src={image} alt="exhibit" className="w-full h-full object-cover" />
    </div>

    <div className="bg-white pt-6 flex flex-col h-[300px] flex-grow">

      <h3 className="text-bold-21 text-mediumBlack px-6">
        {title}
      </h3>

      <p className="text-normal-16 text-mediumBlack px-6 mt-3">
        {content}
      </p>

      <div className='mt-auto mb-3 px-6'>
        <button type='button' className='custom__button__open mt-8'>Learn More</button>
      </div>

    </div>
    
  </div>
);

const Exhibits = () => {
  return (
    <section className='max-container'>

      <div className='flexBetween '>
        <h1 className='font-inter text-[32px] md:text-[48px] font-semibold leading-[150%]'>Explore our Exhibits</h1>
        <p className='text-semibold-16 md:text-semibold-18 mr-5 cursor-pointer hover:underline'>View All &gt;</p>
      </div>

      
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-[150px] mt-10 justify-items-center'>
        {exhibits.map((exhibit, index) => (
          <ExhibitCard key={exhibit.id} {...exhibit} exhibits={exhibits} index={index}/>
        ))}
      </div>
  

    </section>
  )
}

export default Exhibits
