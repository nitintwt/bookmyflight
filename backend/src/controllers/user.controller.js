import { User } from '../models/user.model.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import {asyncHandler} from '../utils/asyncHandler.js'

const registerUser = asyncHandler( async (req , res)=>{

  const {name , email , password} = req.body

  if([email , name , password].some((field)=> field.trim()==="")){
    throw new ApiError(400 , "All fields are required")
  }

  if (!email.endsWith('@gmail.com')){
    throw new ApiError(408 , "Enter a valid Email")
  }

  if(password.length < 8){
    throw new ApiError(407 , "Password should be atleast 8 character long ")
  }

  const checkExistedUser = await User.findOne({email})  // checking if user already exists or not

  if (checkExistedUser){
    throw new ApiError(409 , "Email already exists")
  }

  // saving the data in db
  const user = await User.create({
    name: name.toLowerCase(),
    email,
    password,
  })

  const userCreated = await User.findById(user?._id).select("-password")   // checking if user data get registered in db or not

  if(!userCreated){
    throw new ApiError(500 , "Something went wrong while registering User. Please try again.")
  }

  return res.status(201).json(
    new ApiResponse(200 , userCreated , "User registered Successfully")
  )
})

const loginUser = asyncHandler(async(req , res)=>{

  const {email , password} = req.body

  if([email , password].some((field)=> field.trim()==="")){
    throw new ApiError(400 , "All fields are required")
  }

  if (!email.endsWith('@gmail.com')){
    throw new ApiError(408 , "Enter a valid Email")
  }

  const oldUser = await User.findOne({email})

  if(!oldUser){
    throw new ApiError(404 , "User does not exist")
  }

  const isPasswordValid = await oldUser.isPasswordCorrect(password)

  if(!isPasswordValid){
    throw new ApiError(401 , "Passoword incorrect")
  }

  return res.status(200).json(new ApiResponse(200 , oldUser , "User logged in successfully"))
})

export {registerUser , loginUser}