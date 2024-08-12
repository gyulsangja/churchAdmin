import React from 'react';
import {peopleImg} from '../assets/images/index'
import { InputComponent, RadioComponent } from '../components';

const INITIAL_STATE={
  id: '',
  name: '',
  english_name: '',
  address: ''
}

const People = () => {
  const sex = ['남', '여']

  return (
    <div>
      <section className=''>
        <figure className='flex justify-around'>
          <img src={peopleImg} alt='test' className='w-[300px] h-[300px] object-contain'/>
          <figcaption className='w-[48%] flex flex-wrap h-fit'>
            <InputComponent title='번호' value={1} />
            <InputComponent title='성명' value='홍길동' />
            <InputComponent title='영문성명' value='Hong gil dong' />
            <InputComponent title='생년월일' value='2000.12.31' />
            <InputComponent title='생년월일' value='2000.12.31' />
            <InputComponent title='생년월일' value='2000.12.31' />
            <InputComponent title='생년월일' value='2000.12.31' />
            <RadioComponent title='생년월일' value={sex} />
          </figcaption>
        </figure>
        
        <div className='w-[48%]'></div>
      </section>
      
    </div>
  );
}

export default People;
