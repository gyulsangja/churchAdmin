import React, { useState } from 'react';
import {peopleImg} from '../assets/images/index'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  InputComponent,
  RadioComponent,
  InputDateComponent,
  SelectComponent,
  AddressComponent,
  TextareaComponent,
  ResizableDiv
} from '../components';

const People = () => {
  const [list, setList] = useState(true);
  const listHandle = ()=>{
    setList(!list);
  }
  return (
    <div className='flex'>
      {list && <ResizableDiv/>}
      <div className='max-w-[1100px]'>
        <div className='mb-[10px] border-b-[1px]'>
          <button className='w-[50px] leading-[50px] hover:bg-[#efefef]' onClick={listHandle}><MenuOpenIcon/></button>
          <button className='px-[15px] leading-[50px] hover:bg-[#efefef]'>저장하기</button>
        </div>
        
        <section className='flex justify-start'>
            <img src={peopleImg} alt='people' className='w-[200px] h-[200px] object-contain mr-[50px]'/>
            <ul className='flex flex-wrap h-fit'>
              <li className='mr-[10px] mb-[15px]'><InputComponent name='name' title='성명' /></li>
              <li className='mr-[10px] mb-[15px]'><InputDateComponent name='birth' title='생년월일'/></li>
              <li className='mr-[10px] mb-[15px]'><RadioComponent name="calendarType" title='양/음'/></li>
              <li className='mr-[10px] mb-[15px]'><RadioComponent name="gender" title='성별'/></li>
              <li className='mr-[10px] mb-[15px]'><SelectComponent name="maritalStatus" title='결혼유무'/></li>
              <li className='mb-[15px] w-[150px]'><InputComponent name='spouse' title='배우자' /></li>
              <li className='w-full'></li>
          
              <li className='mr-[10px] mb-[15px]'><SelectComponent name="position" title='직분'/></li>
              <li className='mr-[10px] mb-[15px]'><SelectComponent name="department" title='부서'/></li>
              <li className='mr-[10px] mb-[15px]'><SelectComponent name="department2" title='목장'/></li>
              <li className='mr-[10px] mb-[15px]'><InputDateComponent name='registration' title='등록일'/></li>

              <li className='mr-[10px] mb-[15px]'><InputComponent name='phone1' title='연락처1' /></li>
              <li className='mb-[15px]'><InputComponent name='phone2' title='연락처2' /></li>
              <li className='w-full'></li>

              <li className='w-full mb-[15px]'><AddressComponent name='address1' name2='address2' title='주소' /></li>
              <li className='w-full'></li>
              <li className='w-full mb-[15px]'><TextareaComponent name='note' title='비고' /></li>
            </ul>
        </section>
        <nav>
          <ul className='flex'>
            <li>주요신상</li>
            <li>가족</li>
            <li>히스토리</li>
            <li>직장/학력</li>
            <li>자유항목</li>
            <li>새가족</li>
          </ul>
        </nav>
        <section>
          
        </section>
      </div>
      
      
    </div>
  );
}

export default People;
