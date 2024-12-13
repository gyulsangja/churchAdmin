import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

const Aside = () => {
  const menuItems = useSelector((state: any) => state.MenuNavi.menu);
  const location = useLocation();

  return (
    <aside className='h-dvh bg-asideBg dark:bg-asideBgDark fixed w-[80px]'>
      <ul className='pt-[60px]'>
        {
          menuItems.map((item: any) => {
            const isActive = location.pathname === item.addr || location.pathname.startsWith(item.addr + '/');

            return (
              <li className='w-[60px] mx-[auto] my-[8px] group' key={item.id}>
                <Link to={item.addr}>
                  <div className={`
                    w-[60px] text-center mx-[auto] rounded-2xl py-[6px] mb-[4px] transition-all duration-200 ease-custom
                    ${isActive ? 'bg-btnBg' : 'group-hover:bg-btnHoverBg'}
                  `}>
                    <FontAwesomeIcon icon={item.icon} className='w-[40px] h-[16px]' />
                  </div>
                  <p className='mx-[auto] text-center'>{item.name}</p>
                </Link>
              </li>
            );
          })
        }        
      </ul>
    </aside>
  );
}

export default Aside;
