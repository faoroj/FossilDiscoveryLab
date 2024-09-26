import { GroupForm } from '../../constants';

const GroupVisitForm = () => {
  return (
    <section className='max-container'>

      {GroupForm.map((form, index) => (
        <div key={form.id} className='flex flex-col mb-7'>

          <p className='text-bold-16'>
            {form.header.slice(0, -1)}
            <span className="text-red-500">{form.header.slice(-1)}</span>
          </p>

          {index === 1 && (
            <div className='flex'>
              <input 
                type="text"
                className='w-[300px] h-[45px] border rounded-[6px] pl-4 mt-4 border-black mr-[30px]'
                placeholder='First Name'
              >
              </input>

              <input 
                type="text"
                className='w-[300px] h-[45px] border rounded-[6px] pl-4 mt-4 border-black'
                placeholder='Last Name'
              >
              </input>

            </div>
            )}

          {index != 1 && (  
            <input 
              type="text"
              className={index === 8 ? 'w-[800px] h-[170px] border rounded-[6px] pl-4 mt-4 border-black' : 'border-black border pl-4 w-[630px] h-[45px] rounded-[6px] mt-4'}>
            </input>
          )}

          {form.icon && <img src={form.icon} alt={`${form.title} icon`} 
          className='w-[30px] h-[30px] mt-1 cursor-pointer'/>}
        </div>   
      ))} 

      <div className='mt-[50px] flexCenter'>
        <button className='bg-tertiarySecondary h-[50px] w-[250px] rounded-[10px] py-[17px] px-[50px] 
          flexCenter text-bold-21 text-flat hover:bg-secondary'>
          Submit
        </button>
      </div>  

    </section>
  )
}

export default GroupVisitForm
