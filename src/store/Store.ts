import { configureStore } from '@reduxjs/toolkit'
import InputComponentValReducer from './InputComponent/InputComponentVal'
import RadioComponentValsReducer from './InputComponent/RadioComponentVals'
import DetailNavReducer from './PeopleDetail/DetailNav'
import MenuNaviReducer from './Menu/MenuNavi'

export const Store = configureStore({
  reducer:{
    InputComponentVal : InputComponentValReducer,
    RadioComponentVals : RadioComponentValsReducer,
    DetailNav : DetailNavReducer,
    MenuAside: MenuNaviReducer
  }
})