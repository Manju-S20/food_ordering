import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./cartSlice.jsx"

let appStore=configureStore({
    reducer: {
        cart:cartSlice
    }
})
export default appStore