import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const PeopleList = () => {
  return (
    <section className='max-w-[1100px] w-[100%]'>
      <div className='flex'>
        <input type='text' className='w-full border-[1px] border-color-gray-300 p-[5px] rounded-md  w-[calc(100%-100px)]'/>
        <button className='w-[50px] leading-8'><CloseIcon/></button>
        <button className='w-[50px] leading-8'><SearchIcon/></button>
      </div>
      
    </section>
  );
}

export default PeopleList;
