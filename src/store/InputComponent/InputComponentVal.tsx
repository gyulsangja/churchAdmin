import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {peopleInputState} from "../../types/StoreTypes"

const initialState: peopleInputState = {
    id: 1,
    name: '한상은',
    birth: '1986-05-18',
    gender: '남',
    calendarType: '양력',
    registration: '2018-12-01',
    maritalStatus: '기혼',
    position: '전도사',
    department: '교역자/직원',
    department2: null,
    phone1: '010-1234-5678',
    phone2: '010-1234-5678',
    spouse: '박선경',
    address1: '서울 강서구 강서로 532 가양동, 동신아파트,대아아파트',
    address2: '대중교회',
    note: 
    `기타 비고란입니다.
    테스트죠.`,
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