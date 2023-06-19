const mongoose = require("mongoose")
const expensesSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    date:{type:String, required:[true, "Please add a date"]},
    amount:{type:String,required:[true, "Please add an amount"]},
    operator:{type:String,required:[true, "Please add an operator"], default:null},
    driver:{type:String,required:[true, "Please add a driver"]},
    details:{type:String,required:[true, "Please add a details"]},    
})

exports.Expenses = mongoose.model('expensis',expensesSchema);