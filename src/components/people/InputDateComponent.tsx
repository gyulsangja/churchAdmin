import React, {useEffect} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AgeComponent from './AgeComponent'
import { useSelector, useDispatch } from "react-redux"
import { changeInputVal } from '../../store/InputComponent/InputComponentVal';
import { peopleInputProps } from '../../types/PeopleTypes';


const InputDateComponent: React.FC<peopleInputProps> = ({title, name}) => {
    const InputComponentVal = useSelector((state:any)=>state.InputComponentVal)
    const dispatch = useDispatch();
    const value = InputComponentVal[name];

    useEffect(() => {
        if (value && !(value instanceof Date)) {
            dispatch(changeInputVal({ [name]: new Date(value) }));
        }
    }, [value, name, dispatch]);

    const handleDateChange = (date: Date | null) => {
        // 선택된 날짜를 Redux 상태로 업데이트
        dispatch(changeInputVal({ [name]: date }));
    };

  return (
    <dl>
        <dt>
            <label>
                {title}
                {
                    name === 'birth' ? <AgeComponent /> : ''            
                }
            </label>
        </dt>
        <dd className='mt-[5px]'>
            <DatePicker 
                className='w-[300px] border-[1px] border-color-gray-300 p-[5px] rounded-md '
                selected={value}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
            />
        </dd>
        
    </dl>
  );
}

export default InputDateComponent;
