import { Link } from 'react-router-dom';
import { Exitmenu, Plus } from '../../assets';
const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, navLinks, active, setActive }) => {
    
    return (
        isMobileMenuOpen && (
            <div className="sm:hidden flex flex-col absolute top-[0px] left-0 bg-primary w-full h-screen z-100">

              <div className='w-full flex items-center bg-flat h-[55px] px-12 py-4'> 
                <p className='flexCenter flex-1 font-inter font-normal text-[16px] xs:text-[21px]'>Todays hours: 8am-6pm</p>
                <img src={Exitmenu} alt="Exit Menu" className='w-[29px] h-[29px] cursor-pointer ' onClick={() => setIsMobileMenuOpen(false)}/>
              </div>
              
              <ul className="list-none px-12 py-4 text-flat">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`text-bold-28  mt-[20px] `}
                  >
                    <div className="flex items-center justify-between">
                      <Link 
                        to={nav.path} 
                        onClick={() => {
                          setActive(nav.title);
                          setIsMobileMenuOpen(false);
                        }} 
                        className={`${active === nav.title ? "text-secondary" : "text-White"} hover:text-secondary`}
                      >{nav.title}
                      </Link>

                      {index >= 2 && (
                        <img src={Plus} alt={`Image for ${nav.title}`} className="w-[30px] h-[30px] cursor-pointer" />
                        )}
                    </div>


                    <div className='h-[1px] bg-flat mt-4'></div>
                  </li>
                ))}
              </ul>

            </div>
        )
    );
};

export default MobileMenu;