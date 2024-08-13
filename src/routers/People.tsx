import React from 'react';
import {peopleImg} from '../assets/images/index'
import { InputComponent, RadioComponent, InputDateComponent, SelectComponent,AddressComponent } from '../components';

const People = () => {
  return (
    <div>
      <section className=''>
        <figure className='flex justify-around'>
          <img src={peopleImg} alt='test' className='w-[300px] h-[300px] object-contain'/>
          <figcaption className='w-[48%] flex flex-wrap h-fit'>
            <InputComponent name='id' title='번호'/>
            <InputComponent name='name' title='성명' />
            <InputDateComponent name='birth' title='생년월일'/>
            <RadioComponent name="gender" title='성별'/>
            <RadioComponent name="calendarType" title='양/음'/>
            <InputDateComponent name='registration' title='등록일'/>
            <SelectComponent name="maritalStatus" title='결혼유무'/>
            <SelectComponent name="position" title='직책'/>
            <SelectComponent name="department" title='부서'/>
            <InputComponent name='phone1' title='연락처1' />
            <InputComponent name='phone2' title='연락처2' />
            <AddressComponent name='phone2' title='주소' />
          </figcaption>
        </figure>
        
        <div className='w-[48%]'></div>
      </section>
      
    </div>
  );
}

export default People;
