import React from 'react';
import {useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OrganizationNavItem} from '../types/OrganizationTypes';
import {
  OrganizationNav,
  OrganizationList,
  OrganizationDetail,
  OrganizationSubDetail
} from '../components';

const Organization = () => {
  const { id, subId } = useParams(); // URL 파라미터에서 id와 subId 가져오기
  const organizationNavi = useSelector((state: any) => state.OrganizationNavi) as OrganizationNavItem[];
  // URL 파라미터에 따른 선택된 항목을 찾기
  const selectedItem = organizationNavi.find((item: OrganizationNavItem) => item.id === Number(id));
  const selectedSubItem = selectedItem?.submenu?.find((sub: OrganizationNavItem) => sub.id === Number(subId));
  
  return (
    <div className='flex justify-between'>
      <OrganizationNav
        organizationNavi={organizationNavi}
        selectedId={id}
        selectedSubId={subId}
      />
      <div className='w-[calc(85%-30px)]'>
        {selectedItem ? (
          selectedSubItem ? (
            <>
              <h2 className='text-xl font-bold border-b-2 p-[10px]'>{selectedSubItem.name}</h2>
              <div className='p-[10px]'>
                <OrganizationSubDetail subItem={selectedSubItem} />
              </div>
              
            </>
            
          ) : (
            <>
              <h2 className='text-xl font-bold border-b-2 p-[10px]'>{selectedItem.name}</h2>
              <div className='p-[10px]'>
                <OrganizationDetail item={selectedItem} />
              </div>
            </>
            
          )
        ) : (
          <>
            <h2 className='text-xl font-bold border-b-2 p-[10px]'>조직</h2>
            <div className='p-[10px]'>
              <OrganizationList />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Organization;
