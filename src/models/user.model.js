const { number } = require("joi")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phoneNumber:{type:String, default:null},
    location:{type:String, default:null},
    password:{type:String, required:true, select:false},
    role:{type:String, default:'user'},
    token:{type:String},
},{
    timestamps:true
})


exports.User = mongoose.model('Users', userSchema)