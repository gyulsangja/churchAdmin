import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { changeInputVal } from '../../store/InputComponent/InputComponentVal';
import { peopleInputProps } from '../../types/PeopleTypes';


const TextareaComponent: React.FC<peopleInputProps> = ({title, name}) => {
    const InputComponentVal = useSelector((state:any)=>state.InputComponentVal)
    const dispatch = useDispatch();
    const value = InputComponentVal[name];
    const inputChangeHandle = (e:any) => {
        dispatch(changeInputVal({ [name] : e.target.value}));
      };
  return (
    <>
        <h3><label>{title}</label></h3>
        <div className='mt-[5px] h-[100px]'>
            <textarea 
                className='w-full border-[1px] border-color-gray-300 p-[5px] rounded-md h-[100%] resize-none'
                onChange={inputChangeHandle}
            >
                {value}
            </textarea>
        </div>
    </>
  );
}

export default TextareaComponent;
