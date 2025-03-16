import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { GroupForm } from '../../constants';
import { motion } from 'framer-motion';
import { format } from "date-fns";

// For every single index except 8 check if there is input 
// If every single one has input and you click submit change the bg to red
// If every single one doesnt have input then send an alert saying must fill out required inputs 


const GroupVisitForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    GroupType: "",
    ContactName: "",
    ContactEmail: "",
    ContactPhone: "",
    DesiredDate: selectedDate || "",
    GroupNumber: "",
    ArrivalTime: "",
    DepartureTime: "",
    Accessibility: "",
  })

  
  const datePickerRef = useRef(null);

  const handleSubmitButton = () => {
    setSubmitForm(true);
    changeBackground();
  }

  function checkInputsFilled() {
    const inputs = document.querySelectorAll('#check-inputs');
    return Array.from(inputs).every(input => input.value.trim() !== "");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const changeBackground = () => {
    if(submitForm && checkInputsFilled()){
      // SEND EMAIL TO cooperangwow@gmail.com
      // const finalFormData = { ...formData, DesiredDate: selectedDate };
      console.log(formData)
    } else {
      alert("Please fill in all required fields.")
    }
  }

  // Function to handle date change
  const handleDateChange = (date) => {
    const formattedDate = format(date, "MM/dd/yyyy");
    setSelectedDate(date);
    setFormData((prevData) => ({
      ...prevData,
      DesiredDate: formattedDate, // Ensure formData has the updated date
    }));
    setCalendarOpen(false); 
  };

  const toggleCalendar = () => {
    if (calendarOpen) {
      datePickerRef.current.setOpen(false); // Close the calendar
    } else {
      datePickerRef.current.setOpen(true); // Open the calendar
    }
    setCalendarOpen(!calendarOpen); // Toggle state
  };

  return (
    <section className='max-container '>
      <form>
      {/* Group Visit Form Items */}
      {GroupForm.map((form, index) => (
        <motion.div 
          key={form.id} 
          className='flex flex-col mb-7'
          initial= {{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 0.5 }} 
        >
          
          {/* P tag header for each input + red star */}
          <p className='text-bold-16'>
            {form.header.slice(0, -1)} 
            {index !=8 && <span className="text-red-500"> {form.header.slice(-1)}</span>} 
          </p>

          {/* Contact Name Variation */}
          {index === 1 && (
            <div className='flex flex-col ss:flex-row'>
              <input 
                type="text"
                className='w-full md:w-[19%] h-[45px] border rounded-[6px] px-4 mt-4 border-black mr-[30px]'
                placeholder='First Name'
              />
              <input 
                type="text"
                className='w-full md:w-[19%] h-[45px] border rounded-[6px] px-4 mt-4 border-black'
                placeholder='Last Name'
              />
            </div>
          )}

          {/* Creates input boxes for everything except Contact Name */}
          {index !== 1 && (
            <>

              {/* If Desired Date add a datepicker for the input box and its icon underneath */}
              {index === 4 ? 
                <div className='relative flex flex-col'>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    id='check-inputs'
                    dateFormat="MM/dd/yyyy"
                    className='border-black border px-4 w-full md:w-[100%] h-[45px] rounded-[6px] mt-4'
                    placeholderText="mm/dd/yyyy"   
                    ref={datePickerRef} 
                    open={calendarOpen}
                    portalId="datepicker-portal"
                    // onInputClick={() => setCalendarOpen(false)}
                    readOnly
                  />

                  {/* Calender Icon*/}
                  {form.icon && (
                    <img 
                      src={form.icon} 
                      alt={`${form.title} icon`} 
                      className='w-[30px] h-[30px] mt-1 cursor-pointer'
                      // onClick={() => document.querySelector('.react-datepicker__input-container input').focus()}
                      onClick={() => toggleCalendar()}
                    />
                  )}

                </div>

                // All of the other input boxes that arent Desired Date
                : 
                <input 
                  type="text"
                  id={index !== 8 ? "check-inputs" : undefined}
                  name={form.submit}
                  value={formData[form.submit] || ''}
                  onChange={handleInputChange}
                  className={index === 8 
                    ? 'w-full md:w-[40%] h-[75px] xs:h-[45px] border rounded-[6px] px-4 mt-4 border-black' 
                    :'border-black border px-4 w-full md:w-[40%] h-[45px] rounded-[6px] mt-4'}
                  placeholder=''
                />
              }
              
            </>
            
          )}
        </motion.div>
      ))}
      </form>

      {/* Submit Button */}
      <motion.div 
        className='mt-[50px] flexCenter'
        initial= {{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', damping: 18, mass: 0.75, delay: 0.8 }} 
      >
        <button 
          className='bg-tertiarySecondary h-[50px] w-[250px] rounded-[10px] py-[17px] px-[50px] flexCenter text-bold-21 text-flat hover:bg-secondary'
          onClick={() => handleSubmitButton()}
        >
          Submit
        </button>
      </motion.div>  

    </section>
  );
};

export default GroupVisitForm;

