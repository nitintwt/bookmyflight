import mongoose , {Schema} from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
    name:{
      type: String,
      required:true,
      lowercase:true,
      trim:true,
    },
    email:{
      type: String,
      required:true,
      lowercase:true,
      trim:true,
      unique: true,
      index: true,
    },
    password:{
      type: String,
      required:[true , "Password is required"]
    }
  },
  {
    timestamps:  true,  // for  createdAt and updatedAt fields
  }
)

// encrypting password just before saving it in db
userSchema.pre("save" , async function(next){
  if(!this.isModified("password")) return next()  // if the passoword is not modified , save directly without encrypting

  this.password = await bcrypt.hash(this.password , 10)  //password encrypted
  next() 
})

userSchema.methods.isPasswordCorrect = async function(passoword){
  return await bcrypt.compare(passoword , this.passoword)
}

export const User = mongoose.model("User" , userSchema)
