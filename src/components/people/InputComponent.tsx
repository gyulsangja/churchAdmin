import React, { useState } from 'react';

interface InputComponentProps {
    title: string;
    value: string|number;
  }


const InputComponent: React.FC<InputComponentProps> = (props) => {
    const [val, setVal] = useState(props.value)
    const inputChangeHandle = (e:any) => {
        setVal(e.target.value);
      };
  return (
    <dl className=''>
        <dt><label>{props.title}</label></dt>
        <dd className='mt-[5px]'>
          <input type='text' value={val} className='w-[300px] border-[1px] border-color-gray-300 p-[5px] rounded-md ' onChange={inputChangeHandle}/>
        </dd>
    </dl>
  );
}

export default InputComponent;
