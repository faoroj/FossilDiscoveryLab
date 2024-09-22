import { exhibits } from '../constants';

const ExhibitCard = ({ image, title, content, }) => (
  <div className='flexCenter flex-col'>

    <div className='w-[575px] h-[368px]'>
      <img src={image} alt="exhibit" className="w-full h-full object-contain" />
    </div>

    <div className="bg-white px-[26px] pt-[30px] flex flex-col h-[350px]">
      <h3 className="text-semibold-28 text-mediumBlack max-w-[523px]">
        {title}
      </h3>
      <p className="text-normal-21 text-mediumBlack max-w-[523px]">
        {content}
      </p>

      <div className='mt-auto mb-3'>
        <button type='button' className='custom__button__open '>Learn More</button>
      </div>

    </div>
    
  </div>
);

const Exhibits = () => {
  return (
    <section className='px'>
      <div className='flexBetween mt-[81px]'>
        <h1 className='font-inter text-[38px] font-semibold leading-[150%]'>Explore our Exhibits</h1>
        <p className='text-semibold-21 mr-5 cursor-pointer hover:underline'>View All &gt;</p>
      </div>

      <div className='flexCenter mt-9'>
        <div className='flexCenter gap-x-[80px]'>
          {exhibits.map((exhibit, index) => (
            <ExhibitCard key={exhibit.id} {...exhibit} exhibits={exhibits} index={index}/>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Exhibits
