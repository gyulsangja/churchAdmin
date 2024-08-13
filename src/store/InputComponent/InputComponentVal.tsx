import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {peopleInputState} from "../../types/StoreTypes"

const initialState: peopleInputState = {
    id: 1,
    name: '홍길동',
    birth: '2022-08-13',
    gender: null,
    calendarType: null,
    registration: '2000-12-31',
    maritalStatus: '미혼',
    position: '과장',
    department: '영업부',
    phone1: '010-1234-5678',
    phone2: '010-1234-5678',
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