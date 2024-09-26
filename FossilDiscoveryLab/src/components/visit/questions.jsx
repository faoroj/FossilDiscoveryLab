import { QuestionMark } from '../../assets';
import { FrequentQuestions } from '../../constants';

const questions = () => {
  return (
    <section className='max-container'>

      <div className='flexCenter'>
        <div className='bg-secondary h-[4px] w-[547px] border-0'></div>
          <img src={QuestionMark} alt='Question Mark' className='w-[101px] h-[176px]'/>
        <div className='bg-secondary h-[4px] w-[547px] border-0'></div>
      </div>

      <h1 className='font-semibold font-inter leader-[150%] text-[32px] md:text-[48px] mt-[60px] md:mt-[110px]'>Frequently Asked Questions</h1>
      <div className="w-[173px] h-[1px] bg-primary mt-[29px]"></div>

      <div className='flex flex-col mt-3'>
        
        {FrequentQuestions.map((item) => (

            <div key={item.id} className='flex flex-col mt-6'>

                <div className='bg-black h-[1px] w-full mt-4 mb-2'></div>
                <div className='flexBetween'>
                  <p className="text-semibold-18">
                      {item.question}
                  </p>
                  <img src={item.icon} alt={item.title} className='w-[34px] h-[34px] cursor-pointer'/>
                </div>
  
            </div>
            
          ))}
        
      </div>

      
    </section>
  )
}

export default questions
