import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiLinuxLogoBold } from 'react-icons/pi';
import { CiDark } from 'react-icons/ci';
import { BsCart4 } from "react-icons/bs";
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../features/modes/modeSlice';

export default function Header() {
  let curMode = useSelector(state => state.modes.modes);
  const dispatch = useDispatch();
  const [currentMode, setCurrentMode] = useState(curMode);

  function toggle() {
    dispatch(toggleState());
    setCurrentMode(prevMode => !prevMode);
  }

  return (
    <div>
      <div className='header flex justify-between items-center '>
        <div className='links pl-2 flex justify-between items-center gap-10 '>
          <Link to='/' className='individual'>
            <PiLinuxLogoBold className='logo' />
          </Link>
          <Link to='/' className='individual'>
            Home
          </Link>
          <Link to='/about' className='individual'>
            About
          </Link>
          <Link to='/contact' className='individual'>
            Contact
          </Link>
        </div>
        <div className='flex justify-between gap-6 items-center'>
          <Link to='/cart'>
            <div className='cart'>
            <BsCart4 className='cartIcon'/>
            <div className='notification'>10</div>
            </div>
          </Link>
          <button onClick={toggle} className='flex justify-center items-center px-1'>
            <CiDark className='mode' />
          </button>
        </div>
      </div>
    </div>
  );
}
