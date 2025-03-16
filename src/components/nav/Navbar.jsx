import { navLinks, visitLinks } from '../../constants';
import {  logo, search } from '../../assets';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hamburgermenu, Exitmenu } from '../../assets';
import MobileMenu from './MobileMenu';
import { easeInOut, motion } from 'framer-motion'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [activeParent, setActiveParent] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentDay = new Date().getDay();
  const hours = currentDay === 0 ? "11am-5pm" : "8am-6pm"; 
  const isHomePage = location.pathname === '/';
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)


  useEffect(() => {
    const currentNav = navLinks.find((nav) => nav.path === location.pathname);
    if (currentNav) {
      setActive(currentNav.title);
      setActiveParent('');
    }
    const currentDropdownNav = visitLinks.find((nav) => nav.path === location.pathname);
  
    if (currentDropdownNav) {
      setActive(currentDropdownNav.title);
      setActiveParent('Visit'); 
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

  const handleSearchClick = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleVisitClick = () => {
    setIsDropdownOpen(!isDropdownOpen);

  };

  return (
    
    <motion.header 
      className='absolute w-full z-10 box-shadow noSelect'
      initial={{ y: isHomePage ? -130 : 0 }}
      animate= {{ y: 0 }}
      transition={{ duration: .5, ease: easeInOut }}
    >

        {/* Search Bar Popup */}
        {isSearchBarOpen && (
          <motion.div 
            className="w-full h-[200px] bg-primary fixed z-20 padding-x"
            initial={{ y: -100  }}
            animate= {{ y: 0 }}
            transition={{ duration: .3, ease: easeInOut }}
          >
            <div className="relative w-full max-container mt-[50px]">
              <img src={Exitmenu} alt="Exit Menu" className='w-[29px] h-[29px] cursor-pointer absolute right-0 -top-[20px]' onClick={handleSearchClick}/>
              <h1 className='text-[18px] xs:text-[36px] font-bold font-inter leading-[150%] text-flat max-w-[800px]'>Search the website</h1>

                <div className="relative flex items-center w-full rounded-[6px] border border-black bg-flat h-[50px] overflow-hidden min-w-[250px]">
                  <input
                      id="search-bar"
                      type="search"
                      inputMode="text"
                      placeholder="What would you like to find?"
                      className="flex-1 h-full pl-4 text-normal-16 focus:outline-none text-ellipsis bg-flat overflow-hidden"
                    />

                    {/* Search button */}
                    <button className="bg-flat h-full rounded-[6px] w-[60px] flexCenter focus:outline-none hover:bg-gray-200 transition-colors flex-shrink-0">
                      <img
                        src={search} // Path to your search icon
                        alt="Search Icon"
                        className="w-[30px] h-[30px] cursor-pointer"
                      />
                    </button>
                </div>

            </div>
          </motion.div>
        )}

        {/* Top Section */}
        <div className='bg-primary w-full'>
          <div className='padding-x max-container flexBetween'>

            <div className=''>
              <Link to="/">
                <img src={logo} alt='Fossil Discovery Lab' className='w-[110px] h-[64px] xxs:h-[64px] xxs:w-[190px] cursor-pointer object-contain'/>
              </Link>
            </div>

            <div className='flexCenter flex-shrink-0'>
              <button type='button' className='custom__button__bevel mr-[9px]'>Buy Tickets</button>
              <button type='button' className='custom__button__bevel hidden sm:block'>Donate</button>
            </div>

          </div>
        </div>

        {/*Bottom Section */}
        <div className='w-full bg-white'>

          <div className='relative max-container padding-x h-[44px] flexBetween'>

            {/*Nav Links */}
            <ul className="list-none md:flex hidden">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`text-bold-16 cursor-pointer text-center mt-[10px] 
                    ${(active === nav.title || (activeParent === 'Visit' && nav.title === 'Visit')) ? "text-secondary" : "text-White"} 
                    ${index === navLinks.length - 1 ? "mr-0" : "mr-6 md:mr-7"} hover:text-secondary`}
                  onClick={nav.title === 'Visit' ? handleVisitClick : null}
                >

                  {nav.title !== 'Visit' ? (
                    <Link to={nav.path} className="block w-full h-[70%]">{nav.title}</Link>
                    ) : (
                    <p>{nav.title}</p>
                  )}

                  <hr
                    className={`w-[60px] h-[3px] rounded-[6px] left-14 mt-2 transition-all duration-300 ${
                    (active === nav.title || (activeParent === 'Visit' && nav.title === 'Visit')) ? "bg-secondary" : "bg-transparent"
                    }`}
                  />

                </li>

              ))}
            </ul>

            {/* Visit Dropdown menu */}
            {isDropdownOpen && (
              <div className='absolute top-full left-44 w-[190px] h-[186px] px-[14px] md:flex hidden justify-center items-center flex-col bg-secondary z-50'>
                {visitLinks.map((nav, index) => (
                  <Link 
                    key={index} 
                    to={nav.path}
                    onClick={() => {
                      setActiveParent('Visit'); // Set "Visit" as the active parent link
                      setActive(nav.title); // Set the clicked dropdown link as active
                      setIsDropdownOpen(false); // Optionally close the dropdown after clicking
                    }}
                    >

                  <h1 className={`text-semibold-16 text-flat hover:text-black cursor-pointer ${index === 0 ? "mt-[0px]" : "mt-[12px]"}`}>
                    {nav.dropdowntitle}  
                  </h1>
                  </Link>
                ))}
              </div>
              )}

            {/* Hamburger Icon - Visible on Small Screens */}
            <button
              className="md:hidden block"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            <img src={Hamburgermenu}/>

            </button>

            <div className='flexCenter'>
              {/*Todays Hours */}
              <p className='flexEnd text-normal-16 mr-2 hidden sm:block'>Todays hours: {hours}</p>
              
              {/*Search */}
              <div className='flexCenter w-[115px] h-[33px]'> 
                <img src={search} alt="search logo" className='ml-[10.92px] w-[25px] h-[25px] cursor-pointer ' onClick={handleSearchClick}></img>
                <p className='ml-[2px] text-semibold-16'>Search</p>
              </div>
            </div>
            
          </div>
          

          {/* Mobile Menu */}
          <MobileMenu 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          navLinks={navLinks}
          active={active}
          setActive={setActive}
        />
        </div>
    </motion.header>
  )
}

export default Navbar

