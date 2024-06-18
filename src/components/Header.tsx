import React from 'react';
import {logo} from '../assets/images/index'

const Header = () => {
  return (
    <header className='fixed w-[100vw] h-[60px] z-[9999]'>

        <h1 className='flex h-[60px] px-[9px]'>
            <img 
                src={logo}
                alt='귤귤 교적시스템'
                className='w-[30px]'
            /> 귤귤 교적시스템</h1>
    </header>
  );
}

export default Header;
