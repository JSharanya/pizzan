import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FMCHrgp5aRdsZje0SaqLh3A_3o1g7zjUye9WNw_RJQ&s",
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},{timestamps:true}
)

const User=mongoose.model('User',userSchema)

export default User;