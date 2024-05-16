import { useState } from "react"
import UserContext from "./UserContext.js"

const UserContextProvider = ({children})=>{
  const [userEmail , setUserEmail] = useState('')
  const [name , setName]= useState('')
  return(
    <UserContext.Provider value={{userEmail , setUserEmail , name , setName}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider