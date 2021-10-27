var mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        min:6,
        max:255
    },
    org_name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    email:{
        type:String,
        required:true,
        unique: true,
        min:6,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    country:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
        min:10,
        max:12
    },
    role:{
        type:Number,
        default:0,

    }

});

module.exports=mongoose.model('User',userSchema);