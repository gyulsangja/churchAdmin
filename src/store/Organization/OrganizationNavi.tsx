import { createSlice } from "@reduxjs/toolkit";

const OrganizationNavi = createSlice({
  name: 'OrganizationNavi',
  initialState: [
    {
      id: 1,
      name: '공동의회',
    },
    {
      id: 2,
      name: '당회',
    },
    {
      id: 3,
      name: '제직회',
    },
    {
      id: 4,
      name: '감사위원회',
    },
    {
        id: 5,
        name: '상설위원회',
        submenu: [
          { id: 51, name: '예배위원회' },
          { id: 52, name: '행정위원회' },
          { id: 53, name: '교육위원회' },
          { id: 54, name: '복지위원회' },
          { id: 55, name: '재정위원회' },
        ],
      },
      {
        id: 6,
        name: '특별위원회',
        submenu: [
          { id: 61, name: '엘리베이터건축위원회' },
        ],
      },
      {
        id: 7,
        name: '전도회',
        submenu: [
          { id: 71, name: '베드로회' },
          { id: 72, name: '한나회' },
          { id: 73, name: '에스더회' },
          { id: 74, name: '제1남전도회' },
          { id: 75, name: '제2남전도회' },
          { id: 76, name: '제1여전도회' },
          { id: 77, name: '제2여전도회' },
          { id: 78, name: '제3여전도회' },
          { id: 79, name: '제4여전도회' },
        ],
      },
      {
        id: 8,
        name: '교회학교',
        submenu: [
          { id: 81, name: '청년부' },
          { id: 82, name: '학생부' },
          { id: 83, name: '유초등부' },
          { id: 84, name: '유치부' },
        ],
      },
  ],
  reducers: {},
});

export default OrganizationNavi.reducer;