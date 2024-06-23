import React from 'react';
import {peopleImg} from '../assets/images/index'

const People = () => {
  return (
    <div>
      <figure>
        <img src={peopleImg} alt='test'/>
        <figcaption></figcaption>
      </figure>
      
    </div>
  );
}

export default People;
