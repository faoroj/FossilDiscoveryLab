import { exhibits } from '../../constants';
import { Rightarrow } from '../../assets';


const ExhibitCard = ({ image, title, content, }) => (
  <div className='flex flex-col w-full max-w-full'>

    <div className='w-full'>
      <img src={image} alt="exhibit" className="w-full h-full object-cover" />
    </div>

    <div className="bg-white pt-6 flex flex-col xxs:h-[300px] flex-grow">

      <h3 className="text-bold-16 xxs:text-[21px] sm:text-[21px] text-mediumBlack px-6">
        {title}
      </h3>

      <p className="font-inter font-normal leading-[150%] text-[12px] xs:text-[14px] ss:text-[12px] md:text-[16px] text-mediumBlack px-6 mt-3">
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

      <div className='flexBetween flex-col sm:flex-row'>
        <h1 className='font-inter text-[21px] xxs:text-[32px] md:text-[48px] font-semibold leading-[150%]'>Explore our Exhibits</h1>

        <div className='flexCenter'>
          <p className='text-semibold-16 md:text-semibold-18 mr-2 cursor-pointer hover:underline'>View All</p>
          <img src={Rightarrow} alt='right arrow' className='h-[13px] w-[10px] hidden sm:block'/>
        </div> 
      </div>

      
      <div className='grid grid-cols-1 ss:grid-cols-2 gap-[20px] sm:gap-[80px] md:gap-[150px] mt-10 justify-items-center'>
        {exhibits.map((exhibit, index) => (
          <ExhibitCard key={exhibit.id} {...exhibit} exhibits={exhibits} index={index}/>
        ))}
      </div>
  

    </section>
  )
}

export default Exhibits
