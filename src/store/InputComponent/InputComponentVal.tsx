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
    position: '목사',
    department: '교역자/직원',
    department2: null,
    phone1: '010-1234-5678',
    phone2: '010-1234-5678',
    spouse: '심청이',
    address1: '서울 강서구 강서로 532 가양동, 동신아파트,대아아파트',
    address2: '대중교회',
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