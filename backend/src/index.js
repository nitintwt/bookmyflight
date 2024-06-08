import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({path:'./.env'})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 6000 , ()=>{
    console.log( `SERVER IS RUNNING AT PORT: ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("MONGODB CONNECTION FAILED !!!" , error)
})