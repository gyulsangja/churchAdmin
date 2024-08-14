import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {peopleInputState} from "../../types/StoreTypes"

const initialState: peopleInputState = {
    id: 1,
    name: '홍길동',
    birth: '1986-07-18',
    gender: '남',
    calendarType: '음력',
    registration: '2000-12-31',
    maritalStatus: '미혼',
    position: '과장',
    department: '영업부',
    department2: '동아리4',
    phone1: '010-1234-5678',
    phone2: '010-1234-5678',
    spouse: '전지현',
    address1: '서울 구로구 디지털로31길 62 구로동, 아티스포럼',
    address2: '301호, 302호, 303호 주식회사 엘엑스',
    note: `
    기타 비고란입니다.
    테스트죠.

    `,
};

const InputComponentVal = createSlice({
    name: 'InputComponentVal',
    initialState,
    reducers: {
        inputValSet(state, action: PayloadAction<peopleInputState>) {
            return action.payload;
        },
        changeInputVal(state, action: PayloadAction<Partial<peopleInputState>>) {
            return { ...state, ...action.payload };
        }
    }
});

export const { inputValSet, changeInputVal } = InputComponentVal.actions;
export default InputComponentVal.reducer;