import React from 'react'
import axios from 'axios'

const  GenerateAccessToken = async ()=> {
    try {
      const token = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token" ,
       {client_id:`${import.meta.env.VITE_CLIENT_ID}` , client_secret:`${import.meta.env.VITE_CLIENT_SECRET}` ,
        grant_type: 'client_credentials'} , 
        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}} )
      return token
    } catch (error) {
      console.log("Error generating access token" , error)
      throw error
    }
}

export default GenerateAccessToken
