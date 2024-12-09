import React, {useState} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

const Aside = () => {
  const menuItems = useSelector((state: any) => state.MenuAside.menu);
  const location = useLocation();

  return (
    <aside className='h-dvh bg-asideBg dark:bg-asideBgDark fixed w-[88px]'>
      <ul className='pt-[60px]'>
        {
          menuItems.map((item: any) =>(
            <li className='w-[80px] mx-[auto] mb-[10px] group'>
              <Link to={item.addr}>
                <div className={`
                  w-[60px] text-center mx-[auto] rounded-xl py-[6px] mb-[4px]  transition-all duration-200 ease-custom
                  ${location.pathname === item.addr ? 'bg-btnBg' : 'group-hover:bg-btnHoverBg'} 
                  `}>
                  <FontAwesomeIcon icon={item.icon} className='w-[40px] h-[16px]'/>
                </div>
                <p className='mx-[auto] text-center'>{item.name}</p>
              </Link>
            </li>
          ))
        }        
      </ul>
    </aside>
    
  );
}

export default Aside;
