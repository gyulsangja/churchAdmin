import { createSlice } from "@reduxjs/toolkit";
import {
    faNetworkWired,
    faChurch,
    faUser,
    faHeart,
    faTableColumns
} from '@fortawesome/free-solid-svg-icons';


const MenuNavi = createSlice({
    name: 'MenuNavi',
    initialState: {
        menu: [
            {
                id: 1,
                name: 'HOME',
                addr: '/',
                icon: faTableColumns
            },
            {
                id: 2,
                name: '교회',
                addr: '/church',
                icon: faChurch
            },
            {
                id: 3,
                name: '조직',
                addr: '/organization',
                icon: faNetworkWired,
            },
            {
                id: 4,
                name: '성도',
                addr: '/peopleList',
                icon: faUser
            },
            {
                id: 5,
                name: '심방',
                addr: '/people/1',
                icon: faHeart
            },
        ]
    },
    reducers: {
    }
})

export default MenuNavi.reducer