import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNetworkWired,
  faChurch,
  faUser,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

const Aside = () => {

  return (
    <aside className='h-dvh bg-asideBg dark:bg-asideBgDark fixed w-[88px]'>
      <ul className='pt-[60px]'>
        <li>
          <Link to='/'>
            <div><FontAwesomeIcon icon={faChurch} /></div>
            <span>교회</span>
          </Link>
        </li>
        <li>
          <Link to='/people'>
            <div><FontAwesomeIcon icon={faNetworkWired} /></div>
            <span>조직</span>
          </Link>
        </li>
        <li>
          <Link to='/people/1'>
            <div><FontAwesomeIcon icon={faUser} /></div>
            <span>성도</span>
          </Link>
        </li>
        <li>
          <Link to='/people'>
            <div><FontAwesomeIcon icon={faHeart} /></div>
            <span>심방</span>
          </Link>
        </li>
        <li>
          <Link to='/people'>
            <div><FontAwesomeIcon icon={faUser} /></div>
            <span>리스트</span>
          </Link>
        </li>
      </ul>
    </aside>
    
  );
}

export default Aside;
