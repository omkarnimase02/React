import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

     // useContext
    const {user} = useContext(UserContext)
    
     if (!user) return <div>Please Log in</div>

     return  <div> Welcome {user.username} </div>
}

export default Profile
