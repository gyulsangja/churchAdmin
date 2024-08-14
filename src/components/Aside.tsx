import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <ul className='pt-[60px]'>
      <li><Link to="/people/1">people1</Link></li>
      <li><Link to="/people">people</Link></li>
    </ul>
  );
}

export default Aside;
