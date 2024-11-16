import { createSlice } from "@reduxjs/toolkit";



const DetailNav = createSlice({
    name: 'DetailNav',
    initialState: {
        select : '주요신상',
        list: ['주요신상', '가족', '히스토리', '직장/학력', '자유항목', '새가족']
    },
    reducers: {
        DetailNavSet(state, action){
            return action.payload
        }
    }
})

export const {DetailNavSet} = DetailNav.actions
export default DetailNav.reducer