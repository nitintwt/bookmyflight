import express from 'express'
import cors from 'cors'
import router from './routes/user.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}))

app.use(express.json({limit:'16kb'}))  // setting a limit of json data
app.use(express.urlencoded({limit:"16kb"})) // setting a limit of url data 
app.use(cookieParser())  // to do CRUD operation on user cookies

//routes
app.get('/' , (req, res)=>{
  res.send("Hello")
})
app.use("/api/v1/users" , router)

export {app}