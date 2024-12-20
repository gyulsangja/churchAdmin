import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {OrganizationNavItem} from "../../types/OrganizationTypes"

const OrganizationNavi = createSlice({
  name: 'OrganizationNavi',
  initialState: [
    {
      id: 100,
      name: '공동의회',
    },
    {
      id: 200,
      name: '당회',
    },
    {
      id: 300,
      name: '제직회',
    },
    {
      id: 400,
      name: '감사위원회',
    },
    {
        id: 500,
        name: '상설위원회',
        submenu: [
          { id: 500100, name: '예배위원회' },
          { id: 500200, name: '행정위원회' },
          { id: 500300, name: '교육위원회' },
          { id: 500400, name: '복지위원회' },
          { id: 500500, name: '재정위원회' },
        ],
      },
      {
        id: 600,
        name: '특별위원회',
        submenu: [
          { id: 61, name: '엘리베이터건축위원회' },
        ],
      },
      {
        id: 700,
        name: '전도회',
        submenu: [
          { id: 700100, name: '베드로회' },
          { id: 700200, name: '한나회' },
          { id: 700300, name: '에스더회' },
          { id: 700400, name: '제1남전도회' },
          { id: 700500, name: '제2남전도회' },
          { id: 700600, name: '제1여전도회' },
          { id: 700700, name: '제2여전도회' },
          { id: 700800, name: '제3여전도회' },
          { id: 700900, name: '제4여전도회' },
        ],
      },
      {
        id: 800,
        name: '교회학교',
        submenu: [
          { id: 800100, name: '청년부' },
          { id: 800200, name: '학생부' },
          { id: 800300, name: '유초등부' },
          { id: 800400, name: '유치부' },
        ],
      },
  ],
  reducers: {
    addNavItem : (state)=>{
      const maxId = state.reduce((max, item) => Math.max(max, item.id), 0);
      const newId = maxId + 100;

      // 새 항목 추가
      state.push({
        id: newId,
        name: "새조직",
      });
    }
  },
});

export const { addNavItem } = OrganizationNavi.actions;
export default OrganizationNavi.reducer;