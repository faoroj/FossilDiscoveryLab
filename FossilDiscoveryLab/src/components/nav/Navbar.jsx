import { navLinks, visitLinks } from '../../constants';
import {  logo, search } from '../../assets';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hamburgermenu, Exitmenu, Plus } from '../../assets';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const currentNav = navLinks.find((nav) => nav.path === location.pathname);
    if (currentNav) {
      setActive(currentNav.title);
    }
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);


  const handleVisitClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='sticky z-10 box-shadow'>

        {/* Top Section */}
        <div className='bg-primary w-full'>
          <div className='padding-x max-container flexBetween'>

            <div>
              <Link to="/">
                <img src={logo} alt='Fossil Discovery Lab' className='w-[190px] h-[64px] cursor-pointer object-contain'/>
              </Link>
            </div>

            <div className='flexCenter'>
              <button type='button' className='custom__button__bevel mr-[9px]'>Buy Tickets</button>
              <button type='button' className='custom__button__bevel hidden sm:block'>Donate</button>
            </div>

          </div>
        </div>


        {/*Bottom Section */}
        <div className='w-full bg-white'>

          <div className='max-container padding-x h-[44px] flexBetween'>

            {/*Nav Links */}
            <ul className="list-none md:flex hidden">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`text-bold-16 cursor-pointer text-center mt-[10px] ${
                    active === nav.title ? "text-secondary" : "text-White"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-6 md:mr-7"} hover:text-secondary`}
                  onClick={nav.title === 'Visit' ? handleVisitClick : () => setActive(nav.title)}
                >
                  {nav.title !== 'Visit' ? (
                    <Link to={nav.path}>{nav.title}</Link>
                    ) : (
                    <p>{nav.title}</p>
                  )}

                  <hr
                    className={`w-[60px] h-[3px] rounded-[6px] mt-2 transition-all duration-300 ${
                    active === nav.title ? "bg-secondary" : "bg-transparent"
                    }`}
                  />

                </li>

              ))}
            </ul>

            {/* Hamburger Icon - Visible on Small Screens */}
            <button
              className="md:hidden block"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            <img src={Hamburgermenu}/>

            </button>

            {/* Mobile Menu */}
            <MobileMenu 
              isMobileMenuOpen={isMobileMenuOpen} 
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              navLinks={navLinks}
              active={active}
              setActive={setActive}
            />

            <div className='flexCenter'>
              {/*Todays Hours */}
              <p className='flexEnd text-normal-16 mr-2 hidden sm:block'>Todays hours: 8am-6pm</p>
              
              {/*Search */}
              <div className='flexCenter w-[115px] h-[33px]'> 
                <img src={search} alt="search logo" className='ml-[10.92px] w-[25px] h-[25px] cursor-pointer '></img>
                <p className='ml-[2px] text-semibold-16'>Search</p>
              </div>
            </div>
            
          </div>

        </div>
    </header>
  )
}

export default Navbar

