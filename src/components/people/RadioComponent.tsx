import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeInputVal } from '../../store/InputComponent/InputComponentVal';
import { peopleInputProps } from '../../types/PeopleTypes';

const RadioComponent: React.FC<peopleInputProps> = ({ title, name }) => {
  const InputComponentVal = useSelector((state:any)=>state.InputComponentVal)
  const RadioComponentVals = useSelector((state:any)=>state.RadioComponentVals)
  const dispatch = useDispatch();
  const val = InputComponentVal[name]
  const vals = RadioComponentVals[name]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputVal({ [name] : e.target.value}));
  };
  return (
    <>
        <h3>{title}</h3>
        <div className='mt-[5px] leading-8'>
            {
                vals.map((i:any, index:number)=>(
                    
                    <label key={index} className='mr-[10px]'>
                      <input 
                        type='radio' 
                        value={i} 
                        name={name}
                        checked={val === i}
                        onChange={handleChange} 
                      /> {i}
                    </label>
                    
                ))
            }
        </div>
    </>
  );
}

export default RadioComponent;
