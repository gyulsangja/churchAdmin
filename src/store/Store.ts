import { configureStore } from '@reduxjs/toolkit'
import InputComponentValReducer from './InputComponent/InputComponentVal'
import RadioComponentValsReducer from './InputComponent/RadioComponentVals'

export const Store = configureStore({
  reducer:{
    InputComponentVal : InputComponentValReducer,
    RadioComponentVals : RadioComponentValsReducer,
  }
})