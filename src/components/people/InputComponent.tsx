import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { changeInputVal } from '../../store/InputComponent/InputComponentVal';
import { peopleInputProps } from '../../types/PeopleTypes';


const InputComponent: React.FC<peopleInputProps> = ({title, name}) => {
  const InputComponentVal = useSelector((state:any)=>state.InputComponentVal)
  const dispatch = useDispatch();
  const value = InputComponentVal[name];
    const inputChangeHandle = (e:any) => {
      dispatch(changeInputVal({ [name] : e.target.value}));
    };
  return (
    <>
        <h3><label>{title}</label></h3>
        <div className='mt-[5px]'>
          <input
            className='w-full border-[1px] border-color-gray-300 p-[5px] rounded-md ' 
            type='text'
            value={value}
            onChange={inputChangeHandle}
            name={name}
          />
        </div>
    </>
  );
}

export default InputComponent;
