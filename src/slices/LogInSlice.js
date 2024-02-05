import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn : false
}

const logInSlice = createSlice({
    name:"LogIn",
    initialState:initialState,
    reducers:{
        setIsLoggedIn(state,value){
            state.isLoggedIn =value.payload
        },
    }
})

export const {setIsLoggedIn} = logInSlice.actions
export default logInSlice.reducer