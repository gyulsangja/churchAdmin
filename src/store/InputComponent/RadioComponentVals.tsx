import { createSlice } from "@reduxjs/toolkit";



const RadioComponentVals = createSlice({
    name: 'RadioComponentVals',
    initialState: {
        gender : ['남', '여'],
        calendarType : ['양력', '음력'],
        maritalStatus :['기혼', '미혼', '사별', '이혼', '재혼', '별거'],
        position :['', '목사', '강도사', '전도사', '장로', '권사', '안수집사', '서리집사', '성도', '출석교인'],
        department :['', '교역자/직원','베드로회', '한나회', '에스더회', '제1남전도회', '제2남전도회', '제1여전도회', '제2여전도회', '제3여전도회'],
        department2 :['', '1목장', '2목장', '3목장', '4목장', '5목장', '6목장', '7목장', '8목장', '9목장','10목장', '11목장', '12목장','13목장', '14목장', '15목장', '16목장', '17목장', '18목장', '19목장', '20목장' ]
    },
    reducers: {
        RadioValSet(state, action){
            return action.payload
        }
    }
})

export const {RadioValSet} = RadioComponentVals.actions
export default RadioComponentVals.reducer