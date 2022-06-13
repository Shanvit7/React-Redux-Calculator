// Redux Store

import { configureStore } from "@reduxjs/toolkit";
import  calculatorReduer  from "./calculatorSlice";

export const store = configureStore({
    reducer:{
        calculator:calculatorReduer,
    }
})