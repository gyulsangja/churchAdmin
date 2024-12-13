import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationNavItem, OrganizationSubItem, OrganizationNavProps } from '../../types/OrganizationTypes';

const OrganizationNav: React.FC<OrganizationNavProps> = ({ organizationNavi, selectedId, selectedSubId }) => {
    return (
      <nav className='w-[15%] p-[20px] bg-asideBg min-h-[calc(100vh-120px)] rounded-lg'>
        <ul>
          {organizationNavi.map((item: OrganizationNavItem) => (
            <li key={item.id}>
              <div
                className={`cursor-pointer p-[6px] rounded text-sm ${selectedId === String(item.id) ? 'bg-btnBg' : ''}`}
              >
                <Link to={`/organization/${item.id}`}>{item.name}</Link>
              </div>
              {item.submenu && selectedId === String(item.id) && (
                <ul className='pl-[10px] my-[6px]'>
                  {item.submenu.map((sub: OrganizationSubItem) => (
                    <li
                      key={sub.id}
                      className={`text-sm p-[6px] rounded-lg ${selectedSubId === String(sub.id) ? 'bg-btnBg' : ''}`}
                    >
                      <Link to={`/organization/${item.id}/${sub.id}`}>{sub.name}</Link>
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
