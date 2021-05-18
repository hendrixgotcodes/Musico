import {configureStore} from '@reduxjs/toolkit'
import primaryReducer from './primaryReducer'

export default configureStore({
    reducer: primaryReducer
})