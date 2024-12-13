import React from 'react';
import {Link} from 'react-router-dom'
import {logo} from '../../assets/images/index'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';


const Header = () => {
  return (
    <header className='fixed w-[calc(100%-80px)] right-0 h-[60px] z-[9000] flex justify-between bg-light shadow'>
        <h1 className='h-[60px] px-[9px] leading-[60px] font-[700] text-lg'>
          <Link to='/' className='flex'>
            <img src={logo}alt='대중교회 교단 로고' className='w-[12px] mr-[4px]'/>
            <span>대중교회 스마트 목회</span>
          </Link>
        </h1>
        <span className='leading-[60px] px-[9px] cursor-pointer'><AppsRoundedIcon style={{color: '#333'}}/></span>
    </header>
  );
}

export default Header;
