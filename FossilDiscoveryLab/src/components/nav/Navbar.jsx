import { navLinks } from '../../constants';
import {  logo, search } from '../../assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
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

      <div className='h-[44px] flexBetween bg-white'>
        
        <ul className="list-none custom:flex hidden pl-[100px]">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`text-bold-16 cursor-pointer ${
                active === nav.title ? "text-secondary" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-6 md:mr-10"} hover:text-secondary`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

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
  )
}

export default Navbar
