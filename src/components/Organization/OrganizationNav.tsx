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
import { OrganizationNavItem, OrganizationNavProps } from '../../types/OrganizationTypes';
import { addNavItem, delNavItem, editNavItem } from '../../store/Organization/OrganizationNavi';


const OrganizationNav: React.FC<OrganizationNavProps> = ({ organizationNavi, selectedId, selectedSubId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeMenuId, setActiveMenuId] = useState<number | null>(null);
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [editingItemId, setEditingItemId] = useState<number | null>(null);
    const [newName, setNewName] = useState<string>('');

    const menuRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const addNavItemHandle = ()=>{
      dispatch(addNavItem());
      const maxId = Math.max(...organizationNavi.map((item) => item.id)); // 현재 상태에서 가장 큰 ID 찾기
      const newId = maxId + 100; // 새로 추가된 ID 계산
      navigate(`/organization/${newId}`); // 해당 ID로 이동
    }
    const delNavItemHandle = (id: number, name: string)=>{
      const isConfirmed = window.confirm(`${name}를 삭제하시겠습니까?`);
      if (isConfirmed) {
        dispatch(delNavItem(id));
      }
    }

    const editNavItemInputHandle = (id: number, name: string) => {
      setEditingItemId(id);
      setIsEditing(id);
      setNewName(name);
      setActiveMenuId(null)
      
    };

    const editNavItemHandle = (id: number, name: string) => {
      dispatch(editNavItem({ id, name }));
      setEditingItemId(null);  // 수정 완료 후 상태 초기화
      setNewName('');  // 새로운 이름 초기화
      setIsEditing(null);  // 수정 모드 종료
    };
    const toggleMenu = (id: number) => {
      setActiveMenuId((prev) => (prev === id ? null : id));
    };
    
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        const targetElement = event.target as HTMLElement;
    
        // 특정 버튼(예: 이름 바꾸기 버튼) 클릭 여부 확인
        const isClickOnButton = targetElement.closest('.nameChange');
        if (isClickOnButton) return; // 버튼 클릭 시 종료
    
        // 메뉴 외부 클릭 여부 확인
        const isOutside = Object.values(menuRefs.current).every(
          (ref) => ref && !ref.contains(event.target as Node)
        );
    
        if (isOutside) setActiveMenuId(null); // 메뉴 외부 클릭 시 메뉴 비활성화
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
                        delNavItemHandle(item.id, item.name);
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
                    <li>
                      <button 
                        className='flex items-center space-x-2 p-1'
                        onClick={
                          (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            editNavItemInputHandle(item.id, item.name)
                          }
                        }
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <p className='nameChange'>이름 바꾸기{activeMenuId}</p>
                      </button>
                    </li>
                  </ul>
                </div>
                
              )}
              {isEditing === item.id && (
                <div className='fixed left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] p-2 bg-white shadow-md z-[999] rounded-lg max-w-[450px] w-full'>
                  <h4 className='font-bold mb-2 text-lg'>이름 바꾸기</h4>
                  <input
                    type='text'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className='border p-1 rounded w-full mb-2'
                  />
                  <div className='flex justify-end space-x-2'> 
                    <button
                      className='bg-lightGray p-2 rounded'
                      onClick={() => {
                        setIsEditing(null);
                        setEditingItemId(null);
                      }}
                    >
                      취소
                    </button>
                    <button
                      className='bg-btnBg hover:bg-point hover:text-white p-2 rounded'
                      onClick={() => {
                        // 수정 중인 항목이 있을 경우에만 editNavItemHandle 실행
                        if (editingItemId && newName) {
                          editNavItemHandle(editingItemId, newName);
                        }
                      }}
                    >
                      저장
                    </button>
                  </div>
                </div>
              )}
              {item.submenu && selectedId === String(item.id) && (
                <ul className='pl-[10px] my-[6px]'>
                  {item.submenu.map((sub: OrganizationNavItem) => (
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
