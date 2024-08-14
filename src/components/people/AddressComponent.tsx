import React, { useState } from 'react';
import { peopleInputProps2 } from '../../types/PeopleTypes';
import { useSelector, useDispatch } from "react-redux"
import { changeInputVal } from '../../store/InputComponent/InputComponentVal';
import DaumPostcode from 'react-daum-postcode';
import CloseIcon from '@mui/icons-material/Close';

const AddressComponent: React.FC<peopleInputProps2> = ({ title, name, name2 }) => {
  const InputComponentVal = useSelector((state:any)=>state.InputComponentVal)
  const dispatch = useDispatch();
  const value = InputComponentVal[name];
  const value2 = InputComponentVal[name2];
  const [isAddressModal, setIsAddressModal] = useState(false);

  const handleAddressSubmit = (data: any) => {
    let fullAddress = data.address;
    if (data.addressType === 'R') {
      fullAddress += data.bname ? ` ${data.bname}` : '';
      fullAddress += data.buildingName ? `, ${data.buildingName}` : '';
    }
    dispatch(changeInputVal({ [name] : fullAddress}));
    setDetailedAddress('');
    setIsAddressModal(false);
  };
  const setDetailedAddress = (e: string)=>{
    dispatch(changeInputVal({ [name2] : e}));
  }

  return (
    <>
      <h3><label>{title}</label></h3>
      <div className='mt-[5px]'>
        <input
          className='w-full border-[1px] border-color-gray-300 p-[5px] rounded-md'
          type='text'
          placeholder='주소'
          readOnly
          value={value}
          onClick={() => setIsAddressModal(true)}
        />
        <input
            className='w-full border-[1px] border-color-gray-300 p-[5px] rounded-md mt-[10px]'
            type='text'
            placeholder='상세 주소'
            value={value2}
            onChange={(e) => setDetailedAddress(e.target.value)}
          />
        {isAddressModal && (
          <div className='fixed inset-0 flex flex-col justify-center h-[100vh] bg-[#00000099] z-[9999]'>
            
            <div className='max-w-[400px] max-h-[450px] mx-[auto]'>
              <div className='flex justify-end mb-[5px]'>
                <span onClick={() => setIsAddressModal(false)} className='cursor-pointer'><CloseIcon style={{color: '#fff'}}/></span>
              </div>
              <DaumPostcode onComplete={handleAddressSubmit} autoClose={false} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddressComponent;
