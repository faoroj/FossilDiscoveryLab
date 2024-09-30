import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS
import { GroupForm } from '../../constants';

const GroupVisitForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <section className='max-container'>
      {GroupForm.map((form, index) => (
        <div key={form.id} className='flex flex-col mb-7'>

          <p className='text-bold-16'>
            {form.header.slice(0, -1)}
            <span className="text-red-500">{form.header.slice(-1)}</span>
          </p>

          {index === 1 && (
            <div className='flex flex-col ss:flex-row'>
              <input 
                type="text"
                className='w-full md:w-[19%] h-[45px] border rounded-[6px] px-4 mt-4 border-black mr-[30px]'
                placeholder='First Name'
              />
              <input 
                type="text"
                className='w-full md:w-[19%] h-[45px] border rounded-[6px] pl-4 mt-4 border-black'
                placeholder='Last Name'
              />
            </div>
          )}

          {index !== 1 && (
            <>
              {index === 4 ? (
                
                <div className='relative flex flex-col'>
                  
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy"
                    className='border-black border px-4 w-full md:w-[40%] h-[45px] rounded-[6px] mt-4'
                    placeholderText="mm/dd/yyyy"
                  />

                  {form.icon && (
                    <img 
                      src={form.icon} 
                      alt={`${form.title} icon`} 
                      className='w-[30px] h-[30px] mt-1 cursor-pointer'
                      onClick={() => document.querySelector('.react-datepicker__input-container input').focus()}
                    />
                  )}
                </div>

                

              ) : (
                
                <input 
                  type="text"
                  className={index === 8 ? 'w-full md:w-[40%] h-[170px] border rounded-[6px] pl-4 mt-4 border-black' : 
                    'border-black border px-4 w-full md:w-[40%] h-[45px] rounded-[6px] mt-4'}
                  placeholder=''
                />
              )}
            </>
          )}
        </div>
      ))}

      <div className='mt-[50px] flexCenter'>
        <button className='bg-tertiarySecondary h-[50px] w-[250px] rounded-[10px] py-[17px] px-[50px] 
          flexCenter text-bold-21 text-flat hover:bg-secondary'>
          Submit
        </button>
      </div>  
    </section>
  );
};

export default GroupVisitForm;

