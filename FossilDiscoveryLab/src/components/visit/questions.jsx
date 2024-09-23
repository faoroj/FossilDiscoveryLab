import { QuestionMark } from '../../assets';
import { FrequentQuestions } from '../../constants';

const questions = () => {
  return (
    <section className='flex flex-col mt-[160px] mb-[100px] px'>

      <div className='flexCenter'>
        <div className='bg-secondary h-[4px] w-[547px] border-0'></div>
          <img src={QuestionMark} alt='Question Mark' className='w-[101px] h-[176px]'/>
        <div className='bg-secondary h-[4px] w-[547px] border-0'></div>
      </div>

      <h1 className='text-semibold-48 mt-[115px]'>Frequently Asked Questions</h1>
      <div className="w-[173px] h-[1px] bg-primary mt-[29px]"></div>

      <div className='flex flex-col mt-9'>
        
        {FrequentQuestions.map((item) => (

            <div key={item.id} className='flex flex-col'>

                <div className='flexBetween mt-[35px]'>
                  <p className="text-bold-21">
                      {item.question}
                  </p>
                  <img src={item.icon} alt={item.title} className='w-[34px] h-[34px]'/>
                </div>

                
            </div>
            
          ))}
        
      </div>

      
    </section>
  )
}

export default questions
