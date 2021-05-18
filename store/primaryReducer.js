import {combineReducers} from '@reduxjs/toolkit'
import userSlice from './features/userSlice'

const primaryReducer = combineReducers({
    user: userSlice,
})

export default primaryReducer