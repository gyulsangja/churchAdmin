import React, { useState } from 'react';

interface RadioComponentProps {
    title: string;
    value: string[];
  }

const RadioComponent: React.FC<RadioComponentProps> = (props) => {
    const [vals, valsSet] = useState(props.value[0]); 
    const val = props.value;
  return (
    <dl className=''>
        <dt>{props.title}</dt>
        <dd className='mt-[5px]'>
            {
                val.map((i, index)=>(
                    
                    <label key={index} className='mr-[10px]'><input type='radio' value={vals} name='test' /> {i}</label>
                    
                ))
            }
        </dd>
    </dl>
  );
}

export default RadioComponent;
