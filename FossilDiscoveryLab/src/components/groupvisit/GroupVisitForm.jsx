import { GroupForm } from '../../constants';

const GroupVisitForm = () => {
  return (
    <section className='px mt-8'>

      {GroupForm.map((form, index) => (
        <div key={form.id} className='flex flex-col mb-7'>

          <p className='text-bold-16'>
            {form.header.slice(0, -1)}
            <span className="text-red-500">{form.header.slice(-1)}</span>
          </p>

          {index === 1 && (
            <div className='flex'>
              <div className='w-[300px] h-[45px] border rounded-[6px] mt-4 border-black mr-[30px]'>
                <p className='text-normal-16 py-2 ml-3'>First</p>
              </div>
              <div className='w-[300px] h-[45px] border rounded-[6px] mt-4 border-black'>
              <p className='text-normal-16 py-2 ml-3'>Last</p>
              </div>
            </div>
            )}

          {index != 1 && (  
            <div className={index === 8 ? 'w-full h-[170px] border rounded-[6px] mt-4 border-black' : 'border-black border w-[630px] h-[45px] rounded-[6px] mt-4'}></div>
          )}

          {form.icon && <img src={form.icon} alt={`${form.title} icon`} 
          className='w-[30px] h-[30px] mt-1 cursor-pointer'/>}
        </div>   
      ))} 

      <div className='mb-[100px] mt-[50px] flexCenter'>
        <button className='bg-tertiarySecondary h-[70px] w-[370px] rounded-[10px] py-[17px] px-[90px] 
          flexCenter text-bold-28 text-flat hover:bg-secondary'>
          Submit Form
        </button>
      </div>  

    </section>
  )
}

export default GroupVisitForm
