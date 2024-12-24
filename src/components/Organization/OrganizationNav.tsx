import React, { useState, useRef, useEffect  } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faXmark,
  faPenToSquare
} from '@fortawesome/free-solid-svg-icons';
import { OrganizationNavItem, OrganizationSubItem, OrganizationNavProps } from '../../types/OrganizationTypes';
import { addNavItem, delNavItem } from '../../store/Organization/OrganizationNavi';


const OrganizationNav: React.FC<OrganizationNavProps> = ({ organizationNavi, selectedId, selectedSubId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
    const menuRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const addNavItemHandle = ()=>{
      dispatch(addNavItem());
      const maxId = Math.max(...organizationNavi.map((item) => item.id)); // 현재 상태에서 가장 큰 ID 찾기
      const newId = maxId + 100; // 새로 추가된 ID 계산
      navigate(`/organization/${newId}`); // 해당 ID로 이동
    }
    const delNavItemHandle = (id: number)=>{
      dispatch(delNavItem(id));
    }
    const toggleMenu = (id: number) => {
      setActiveMenuId((prev) => (prev === id ? null : id)); // 같은 ID 클릭 시 닫기, 다른 ID 클릭 시 열기
    };
    
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          const isOutside = Object.values(menuRefs.current).every(
              (ref) => ref && !ref.contains(event.target as Node)
          );
          if (isOutside) setActiveMenuId(null); // 모든 메뉴 외부 클릭 시 비활성화
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <nav className='w-[15%] p-[20px] bg-asideBg h-[calc(100vh-120px)] rounded-lg overflow-y-auto'>
        <ul> 
          <li className='p-[6px] flex flex-row justify-between'>
            <b>조직</b>
            <button 
              onClick={addNavItemHandle}
              className='w-[16px] hover:bg-btnHoverBg rounded p-[2px]'
            ><FontAwesomeIcon icon={faPlus} /></button>
          </li>
          {organizationNavi.map((item: OrganizationNavItem) => (
            <li key={item.id} className='relative mb-1'>
              <Link
                to={`/organization/${item.id}`}
                className={`relative block cursor-pointer group p-[6px] rounded text-sm ${
                  selectedId === String(item.id) ? 'bg-btnBg ' : 'hover:bg-btnHoverBg'
                }`}
              >
                {item.name}
                <div className={`absolute top-[4px] right-[6px] flex hidden group-hover:block`}>
                  <button
                    onClick={
                      (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        toggleMenu(item.id);
                    }}
                    className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                  <button
                    onClick={
                      (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        delNavItemHandle(item.id);
                    }}
                    className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
              </Link>
              {activeMenuId === item.id && (
                <div className='absolute bg-white p-2 shadow-md rounded right-2 top-[35px] z-[9999]'>
                  <ul>
                    <li className='flex items-center space-x-2 cursor-pointer p-1'>
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <p>이름 바꾸기</p>
                    </li>
                  </ul>
                </div>
              )}
              {item.submenu && selectedId === String(item.id) && (
                <ul className='pl-[10px] my-[6px]'>
                  {item.submenu.map((sub: OrganizationSubItem) => (
                    <li
                      key={sub.id}
                      className={`relative mb-1 text-sm p-[6px] rounded-lg ${
                        selectedSubId === String(sub.id) ? 'bg-btnBg' : 'hover:bg-btnHoverBg'
                      }`}
                    >
                      <Link
                        to={`/organization/${item.id}/${sub.id}`}
                        className={`group ${sub.id} block`}
                      >
                        {sub.name}
                        <div className={`absolute top-[4px] right-[6px] flex hidden group-hover:block`}>
                          <button
                            onClick={
                              (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                toggleMenu(sub.id);
                            }}
                            className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                          >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                          </button>
                          <button 
                            className='w-[21px] hover:bg-btnHoverBg rounded p-[2px]'
                            onClick={
                              (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                        </div>
                      </Link>
                      {activeMenuId === sub.id && ( // sub.id로 활성화 확인
                        <div className='absolute bg-white p-2 shadow-md rounded right-2 top-[35px] z-[9999]'>
                          <ul>
                            <li className='flex items-center space-x-2 cursor-pointer p-1'>
                              <FontAwesomeIcon icon={faPenToSquare} />
                              <p>이름 바꾸기</p>
                            </li>
                          </ul>
                        </div>
                      )}
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
