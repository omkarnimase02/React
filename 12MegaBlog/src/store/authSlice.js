
// for create the slice -> to track the authentication of user -> login logOut

import { createSlice } from "@reduxjs/toolkit";

// create the intial state of the slice

const initialState = {
    status : false,
    userData:null,
}

// create the slice
const authSlice=  createSlice({
    name:"auth",
    initialState,
    reducers:{
        // login
        login : (state,action) => {
            state.status = true,
            state.userData= action.payload.userData
        },

        // logOut

        logout: (state) =>{
            state.status=false;
            state.userData = null

        }
    }
})

// export all
export const {login,logout} = authSlice.actions;
export default authSlice.reducer;