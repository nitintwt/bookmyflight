import dotenv from 'dotenv'
import connectDB from './db/index.js'
import express from "express"

dotenv.config({path:'./.env'})

const app = express()

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000 , ()=>{
    console.log( `SERVER IS RUNNING AT PORT: ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("MONGODB CONNECTION FAILED !!!" , error)
})