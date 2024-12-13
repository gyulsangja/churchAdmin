import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationSubItem, OrganizationDetailProps } from '../../types/OrganizationTypes';

const OrganizationDetail: React.FC<OrganizationDetailProps> = ({ item }) => {
  return (
    <ul className='pl-[10px]'>
    {item.submenu?.map((sub: OrganizationSubItem) => (
        <li key={sub.id}>
        <Link to={`/organization/${item.id}/${sub.id}`} className='text-sm p-[10px] rounded-lg'>
            {sub.name}
        </Link>
        detail
        </li>
    ))}test
    </ul>
  );
};

export default OrganizationDetail;