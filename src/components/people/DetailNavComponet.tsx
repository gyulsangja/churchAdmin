import React from 'react';
import { useSelector, useDispatch } from "react-redux"

const DetailNavComponet = () => {
const DetailNav = useSelector((state:any)=>state.DetailNav)
console.log(DetailNav)
  return (
    <nav>
        <ul className='flex'>
            <li className='p-[10px] border-[1px] border-color-gray-300 rounded-md'>주요신상</li>
            <li>가족</li>
            <li>히스토리</li>
            <li>직장/학력</li>
            <li>자유항목</li>
            <li>새가족</li>
        </ul>
    </nav>
  );
}

export default DetailNavComponet;
