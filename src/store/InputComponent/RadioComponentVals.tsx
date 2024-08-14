import { createSlice } from "@reduxjs/toolkit";



const RadioComponentVals = createSlice({
    name: 'RadioComponentVals',
    initialState: {
        gender : ['남', '여'],
        calendarType : ['양력', '음력'],
        maritalStatus :['기혼', '미혼', '사별', '이혼', '재혼', '별거'],
        position :['', '회장', '사장', '차장', '부장', '과장', '대리', '사원'],
        department :['', '영업부', '기술부', '전략부', '관리부', '회계부'],
        department2 :['', '동아리1', '동아리2', '동아리3', '동아리4', '동아리5']
    },
    reducers: {
        RadioValSet(state, action){
            return action.payload
        }
    }
})

export const {RadioValSet} = RadioComponentVals.actions
export default RadioComponentVals.reducer