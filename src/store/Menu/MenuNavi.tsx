import { createSlice } from "@reduxjs/toolkit";
import {
    faNetworkWired,
    faChurch,
    faUser,
    faHeart
} from '@fortawesome/free-solid-svg-icons';



const MenuNavi = createSlice({
    name: 'MenuAside',
    initialState: {
        select : '교회',
        menu: [
            {
                id: 1,
                name: '교회',
                addr: '/church',
                icon: faChurch
            },
            {
                id: 2,
                name: '조직',
                addr: '/',
                icon: faNetworkWired,
            },
            {
                id: 3,
                name: '성도',
                addr: '/peopleList',
                icon: faUser
            },
            {
                id: 4,
                name: '심방',
                addr: '/people',
                icon: faHeart
            },
        ]
    },
    reducers: {
        DetailNavSet(state, action){
            return action.payload
        }
    }
})

export const {DetailNavSet} = MenuNavi.actions
export default MenuNavi.reducer