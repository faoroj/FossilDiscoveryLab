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
                <p className='text-normal-16 py-[9px] ml-3'>First</p>
              </div>
              <div className='w-[300px] h-[45px] border rounded-[6px] mt-4 border-black'>
              <p className='text-normal-16 py-[9px] ml-3'>Last</p>
              </div>
            </div>
            )}

          {index != 1 && (  
            <div className={index === 8 ? 'w-[800px] h-[170px] border rounded-[6px] mt-4 border-black' : 'border-black border w-[630px] h-[45px] rounded-[6px] mt-4'}></div>
          )}

          {form.icon && <img src={form.icon} alt={`${form.title} icon`} 
          className='w-[30px] h-[30px] mt-1 cursor-pointer'/>}
        </div>   
      ))} 

      <div className='mb-[100px] mt-[50px] flexCenter'>
        <button className='bg-tertiarySecondary h-[50px] w-[250px] rounded-[10px] py-[17px] px-[50px] 
          flexCenter text-bold-21 text-flat hover:bg-secondary'>
          Submit
        </button>
      </div>  

    </section>
  )
}

export default GroupVisitForm
