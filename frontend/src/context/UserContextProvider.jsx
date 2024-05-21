import { useState } from "react"
import UserContext from "./UserContext.js"

const UserContextProvider = ({children})=>{
  const [accessToken , setAccessToken] = useState('')
  return(
    <UserContext.Provider value={{accessToken , setAccessToken}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider