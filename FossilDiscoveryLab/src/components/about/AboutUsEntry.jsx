import { dinohead } from '../../assets';
const AboutUsEntry = () => {
  return (
    <section>
        <div className='flex px mt-[55px]'>
            <div className='mr-3'>
                <h1 className='text-semibold-48'>About Us</h1>
                <div className="w-[173px] h-[1px] bg-primary mt-[29px]"></div>
                <p className='text-normal-21 mt-[29px]'>
                    "At the Fossil Discovery Lab, we are passionate storytellers of the Earth's ancient history. 
                    Founded by a team of dedicated paleontologists and enthusiasts, we strive to create an immersive 
                    experience that transports visitors back in time to when dinosaurs roamed the planet. Our museum 
                    is a treasure trove of remarkable fossils, each with its own tale of survival, adaptation, and extinction. 
                    Whether you're a seasoned fossil enthusiast or a curious explorer, join us on a journey through millions of years, 
                    where you'll uncover the wonders of paleontology and the awe-inspiring world of dinosaurs."
                </p>
            </div>
            <img src={dinohead} alt='dinohead' className='w-[483px] h-[518px]'/>
        </div>
    </section>
  )
}

export default AboutUsEntry
