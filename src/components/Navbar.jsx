import { useState } from 'react';
import { logo, mobile, close, logo_colored } from "../assets";
import { navLinks } from '../constants';
import styles from "../styles";
import Button from './Button';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='bg-transparent p-6 flex w-full items-center justify-between navbar fade'>
      <a href='#home'><img src={logo_colored} alt="jdx" /></a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`cursor-pointer ${index !== (navLinks.length - 1) ? "mr-6" : "mr-0"} `}>
            { index === (navLinks.length - 1) ? <Button name={nav.title} link={`#${nav.id}`} /> :
             <a href={`#${nav.id}`}>{nav.title}</a>}
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={ toggle ? close : mobile } alt="menu" className='object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black bg-opacity-40 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[50]`}>
          <ul className='list-none flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`cursor-pointer ${index !== (navLinks.length - 1) ? "mb-6" : "mb-0"}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    // This navbar was adapted from [https://www.youtube.com/watch?v=_oO4Qi5aVZs&t=4391s]
  )
};

export default Navbar;