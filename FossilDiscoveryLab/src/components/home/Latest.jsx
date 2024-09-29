import { Trex2 } from '../../assets';

const hours = () => {
  return (
    <section id="hours" className='max-container'>

      <div className='flex flex-col custom:flex-row items-center md:items-stretch'> 

        {/* Left: Image Section */}
        <div className='flex-1'>
          <img src={Trex2} alt="Trex Display" className="h-[250px] ss:h-[350px] lg:h-[550px] w-[450px] xs:w-[450px] md:w-[750px] object-cover "/> 
        </div>

        {/* Right: Content Section */}
        <div className="bg-gray-200 flex-1 flex flex-col items-start justify-center p-4 h-[350px] lg:h-[550px] w-full xs:w-[450px] md:w-[750px]"> 
          
        <h3 className="font-inter font-bold text-[18px] ss:text-[21px] max-w-[523px] ml-3">
            Check out the latest edition to our collection
          </h3>

          <p className="text-normal-16 text-mediumBlack max-w-[523px] mt-[15px] ml-3">
            Explore the fascinating story behind our latest addition to the collection and how it came to be.
          </p>

          <div>
            <p className='underline underline-offset-[4px] text-secondary text-bold-16  mt-[20px] custom:mt-[37px] ml-3 cursor-pointer'>Read More</p>
          </div>
          

        </div>

      </div>
    </section>
  )
}
export default hours




































// import { Trex2 } from '../../assets';

// const Latest = () => {
//   return (
//     <section className='max-container'>

//       <div className='flex flex-row'>

//         <img src={Trex2} alt="Trex" className="h-[458px] object-contain"/>
         

//         <div className="flex justify-center item-start flex-col bg-white w-full px-[26px] pt-[30px] max-h-[608px]">

//           <h3 className="text-bold-21 max-w-[523px] ml-3">
//             Check out the latest edition to our collection
//           </h3>

//           <p className="text-normal-18 text-mediumBlack max-w-[523px] mt-[15px] ml-3">
//             Explore the fascinating story behind our latest addition to the collection and how it came to be.
//           </p>

//           <div>
//             <p className='underline underline-offset-[4px] text-secondary text-bold-18 mt-[37px] ml-3 cursor-pointer'>Read More</p>
//           </div>
          
//         </div>

//       </div>

//     </section>

//   )
// }

// export default Latest
