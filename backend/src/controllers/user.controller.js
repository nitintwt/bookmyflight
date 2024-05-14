import { User } from '../models/user.model.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import {asyncHandler} from '../utils/asyncHandler.js'

const registerUser = asyncHandler( async (req , res)=>{

  const {name , email , password} = req.body

  if([email , name , password].some((field)=> field.trim()==="")){
    return ApiError(400 , "All fields are required")
  }

  const checkExistedUser = await User.findOne({email})  // checking if user already exists or not

  if (checkExistedUser){
    return ApiError(409 , "Email already exists")
  }

  // saving the data in db
  const user = await User.create({
    name: name.toLowerCase(),
    email,
    password,
  })

  const userCreated = await User.findById(user?._id).select("-password")   // checking if user data get registered in db or not

  if(!userCreated){
    return ApiError(500 , "Something went wrong while registering User. Please try again.")
  }

  return res.status(201).json(
    new ApiResponse(200 , userCreated , "User registered Successfully")
  )
})

export {registerUser}