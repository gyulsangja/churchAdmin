import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { OrganizationNavItem, OrganizationSubItem, OrganizationNavProps } from '../../types/OrganizationTypes';
import { addNavItem } from '../../store/Organization/OrganizationNavi';


const OrganizationNav: React.FC<OrganizationNavProps> = ({ organizationNavi, selectedId, selectedSubId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addNavItemHandel = ()=>{
      dispatch(addNavItem());
      const maxId = Math.max(...organizationNavi.map((item) => item.id)); // 현재 상태에서 가장 큰 ID 찾기
      const newId = maxId + 100; // 새로 추가된 ID 계산
      navigate(`/organization/${newId}`); // 해당 ID로 이동
    }
    return (
      <nav className='w-[15%] p-[20px] bg-asideBg h-[calc(100vh-120px)] rounded-lg overflow-y-auto'>
        <ul> 
          <li className='p-[6px] flex flex-row justify-between'>
            <b>조직</b>
            <button 
              onClick={addNavItemHandel}
              className='w-[16px] hover:bg-btnHoverBg rounded p-[2px]'
            ><FontAwesomeIcon icon={faPlus} /></button>
          </li>
          {organizationNavi.map((item: OrganizationNavItem) => (
            <li key={item.id} className='relative group mb-1'>
              <Link 
              to={`/organization/${item.id}`}
              className={`block cursor-pointer p-[6px] rounded text-sm ${selectedId === String(item.id) ? 'bg-btnBg pointer-events-none ' : 'hover:bg-btnHoverBg'}`}
              >{item.name}</Link>
              <div 
              className='absolute top-[4px]  right-[6px] flex hidden group-hover:block'
              >
                <button
                className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                ><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                <button
                className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                ><FontAwesomeIcon icon={faXmark} /></button>
              </div>
              {item.submenu && selectedId === String(item.id) && (
                <ul className='pl-[10px] my-[6px]'>
                  {item.submenu.map((sub: OrganizationSubItem) => (
                    <li
                      key={sub.id}
                      className={`relative group text-sm p-[6px] rounded-lg ${selectedSubId === String(sub.id) ? 'bg-btnBg pointer-events-none' : 'hover:bg-btnHoverBg'}`}
                    >
                      <Link to={`/organization/${item.id}/${sub.id}`}>{sub.name}</Link>
                      <div 
                      className='absolute top-[4px]  right-[6px] flex hidden group-hover:block'
                      >
                        <button
                        className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                        ><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                        <button
                        className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                        ><FontAwesomeIcon icon={faXmark} /></button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default OrganizationNav;
