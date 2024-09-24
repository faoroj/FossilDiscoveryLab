import { navLinks, visitLinks } from '../../constants';
import {  logo, search } from '../../assets';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentNav = navLinks.find((nav) => nav.path === location.pathname);
    if (currentNav) {
      setActive(currentNav.title);
    }
  }, [location]);

  const handleVisitClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='absolute z-10 w-full'>
      <nav className='box-shadow'>

        <div className='bg-primary flexBetween'>
          <div className='pl-[32px] sm:pl-[100px]'>
            <Link to="/">
              <img src={logo} alt='Fossil Discovery Lab' className='w-[190px] h-[64px] cursor-pointer'/>
            </Link>
          </div>

          <div className='pr-[32px] sm:pr-[100px] flexCenter'>
            <button type='button' className='custom__button__bevel mr-[9px]'>Buy Tickets</button>
            <button type='button' className='custom__button__bevel hidden sm:block'>Donate</button>
          </div>
        </div>

        <div className='h-[44px] flexBetween bg-white relative'>

          <ul className="list-none custom:flex hidden pl-[100px]">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-bold-16 cursor-pointer text-center mt-[10px] ${
                  active === nav.title ? "text-secondary" : "text-White"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-6 md:mr-10"} hover:text-secondary`}
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

          {isDropdownOpen && (
          <div className='absolute top-full left-[235px] w-[190px] h-[186px] px-[14px] flex justify-center items-center flex-col bg-secondary z-50'>
            {visitLinks.map((nav, index) => (
              <Link to={nav.path}>
              <h1 key={index} className={`text-semibold-16 text-flat hover:text-black cursor-pointer ${index === 0 ? "mt-[0px]" : "mt-[12px]"}`}>
                {nav.title}
              </h1>
              </Link>
            ))}
          </div>
        )}


          <div className='flexCenter pr-[100px]'>
            <p className='flexEnd text-normal-16 mr-2'>
              Todays hours: 8am-6pm
            </p>

            <div className='flexCenter w-[115px] h-[33px]'> 
              <img src={search} alt="search logo" className='ml-[10.92px] w-[25px] h-[25px] '></img>
              <p className='ml-[2px] text-semibold-16'>Search</p>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar

