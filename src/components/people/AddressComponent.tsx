import React, {useState} from 'react';
import { peopleInputProps } from '../../types/PeopleTypes';
import DaumPostcode from 'react-daum-postcode';

const AddressComponent: React.FC<peopleInputProps> = ({title, name}) => {
    const [address, setAddress] = useState<string>('');
    const [isAddressModal, setIsAddressModal] = useState<boolean>(false);
  
    const handleOpenAddressModal = () => {
      setIsAddressModal(true);
    };
  
    const handleAddressSubmit = (data: any) => {
      setAddress(data.address);
      setIsAddressModal(false);
    };

  return (
    <dl>
        <dt><label>{title}</label></dt>
        <dd className='mt-[5px]'>
          <input
            className='w-[300px] border-[1px] border-color-gray-300 p-[5px] rounded-md ' 
            type='text'
            readOnly={true}
            value={address}
            onClick={handleOpenAddressModal}
          />
          {isAddressModal && (
            <DaumPostcode
              onComplete={handleAddressSubmit}
              autoClose={false}
            />
        )}
        </dd>
    </dl>
  )
}

export default AddressComponent;
