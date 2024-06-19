import React from 'react';
import {Link} from 'react-router-dom'
import {logo} from '../assets/images/index'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';


const Header = () => {
  return (
    <header className='fixed w-[100vw] h-[60px] z-[9999] flex justify-between bg-[#e2f1f7] shadow-xl'>
        <h1 className='h-[60px] px-[9px] leading-[60px] font-bold'>
          <Link to='/' className='flex'>
            <img src={logo}alt='귤귤 교적시스템' className='w-[30px] mr-[8px]'/><span>귤귤 교적</span>
          </Link>
        </h1>
        <span className='leading-[60px] px-[9px] cursor-pointer'><AppsRoundedIcon style={{color: '#333'}}/></span>
    </header>
  );
}

export default Header;
