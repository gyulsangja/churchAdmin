import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeInputVal } from '../../store/InputComponent/InputComponentVal';
import { peopleInputProps } from '../../types/PeopleTypes';

const SelectComponent: React.FC<peopleInputProps> = ({title, name}) => {
    const InputComponentVal = useSelector((state:any)=>state.InputComponentVal)
    const RadioComponentVals = useSelector((state:any)=>state.RadioComponentVals)
    const dispatch = useDispatch();
    const val = InputComponentVal[name]
    const vals = RadioComponentVals[name]
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeInputVal({ [name] : e.target.value}));
    };
  return (
    <>
        <h3>{title}</h3>
        <div className='mt-[5px]'>
            <select 
                name={name}
                onChange={handleChange}
                value={val}
                className='border-[1px] border-color-gray-300 p-[5px] rounded-md '
            >
            {
                vals.map((i:any, index:number)=>(
                    <option key={index} value={i}>{i}</option>
                    
                ))
            }
            </select>
        </div>
    </>
  );
}

export default SelectComponent;
