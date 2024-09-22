import { Googlemap } from '../../assets';

const directions = () => {
  return (
    <section className='flex flex-col px mt-[102px]'>
      <h1 className='text-semibold-48'>Directions and Parking</h1>
      <img src={Googlemap} alt='Google Map' className='w-[1240px] h-[435px] mt-5'/>
    </section>
  )
}

export default directions
