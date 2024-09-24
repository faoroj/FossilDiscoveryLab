import { exhibits } from '../../constants';

const ExhibitCard = ({ image, title, content, }) => (
  <div className='flex flex-col'>

    <div className='w-[470px]'>
      <img src={image} alt="exhibit" className="w-full h-full object-contain" />
    </div>

    <div className="bg-white pt-[30px] flex flex-col h-[300px]">
      <h3 className="text-bold-21 text-mediumBlack max-w-[470px] px-[26px]">
        {title}
      </h3>
      <p className="text-normal-16 text-mediumBlack max-w-[470px] px-[26px] mt-3">
        {content}
      </p>

      <div className='mt-auto mb-3 px-[26px]'>
        <button type='button' className='custom__button__open '>Learn More</button>
      </div>

    </div>
    
  </div>
);

const Exhibits = () => {
  return (
    <section className='px'>
      <div className='flexBetween mx-[100px] mt-[81px]'>
        <h1 className='font-inter text-[38px] font-semibold leading-[150%]'>Explore our Exhibits</h1>
        <p className='text-semibold-18 mr-5 cursor-pointer hover:underline'>View All &gt;</p>
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
