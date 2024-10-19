import mongoose from 'mongoose';


const AdminSchema = new mongoose.Schema({
  adminname:{
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
});


const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;