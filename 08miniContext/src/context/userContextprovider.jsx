import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

// create the 1 method


const UserContextProvider= ({children}) =>{
// children -> means which one is come write as it is
    const [user,setUser] = React.useState(null)
return(

        // wrap into userContext
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default  UserContextProvider;