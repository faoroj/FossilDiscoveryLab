import { Admission } from '../../constants';


const admission = () => {
  return (
    <section className='px flexBetween'>

      <div className='w-[609px]'>
        <h1 className='text-semibold-48'>General Admission</h1>
        <p className='text-normal-18 mt-[15px]'>
          Plan your visit to our Dinosaur Fossil Museum today! 
          Explore the ancient world of dinosaurs with our affordable 
          admission rates for individuals and families. Immerse yourself 
          in a journey through time, marvel at our impressive collection 
          of fossils, and enjoy an educational experience like no other. 
          Whether you're a seasoned paleontology enthusiast or a curious 
          explorer, we welcome you to discover the wonders of the dinosaur 
          kingdom with us.
        </p>
        <button type='button' className='custom__button__bevel custom__button__medium mt-[20px]'>Buy Tickets</button>
      </div>

      <div>
        {Admission.map((admiss) => (

        <div key={admiss.id} className='flexBetween mb-[15px] bg-white w-[584px] h-[60px] pl-[16px] pr-[25px] pt-1'>

            <div className='flex '>
              <h3 className="text-bold-18 max-w-[523px] ">
                  {admiss.age}
              </h3>
            </div>

            <div className='flex '>
              <h3 className="text-bold-18 max-w-[523px] text-right">
                  {admiss.cost}
              </h3>
            </div>
            
            
        </div>
        ))}
      </div>



    </section>
  )
}

export default admission
