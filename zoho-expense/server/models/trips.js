
var mongoose=require('mongoose');

const { ObjectId } = mongoose.Schema;


const tripSchema=new mongoose.Schema({

   email:{
       type: String,
       required:true
   },
   org_name:{
       type: String,
       required:true

   },

    trip_no:{
        type:Number,
    },
    travel_type:{
        type:String,
        min:6,
        max:255
    },
    trip_name:{
        type:String,
        min:6,
        max:255
    },
    trip_designation:{
        type:String,
        min:6,
        max:255
    },
    trip_visa:{
        type:Boolean,
        min:6,
        max:255
    },
    business_purpose:{
        type:String,
        min:6,
        max:255
    },
    f_type:{
        type:String,
        min:6,
        max:255

    },
    depart_from:{
        type:String,
        min:6,
        max:255

    },
    arrive_at:{
        type:String,
        min:6,
        max:255
    },
    depart_date:{
        type:String,
        min:6,
        max:255
    },
    description:{
        type:String,
        min:6,
        max:255
    },
    location:{
        type:String,
        min:6,
        max:255

    },
    check_in:{
        type:String,
        min:6,
        max:255
    },
    check_out:{
        type:String,
        min:6,
        max:255
    },
    description_hotel:{
        type:String,
        min:6,
        max:255
    },
    
    


// array type
   
    status:{
        type:String,
        default:"pending",
        enum: ['approved','remove','pending']
    },
    approver:{
        type:String,
        default:"Admin"
    }

});

module.exports=mongoose.model('Trip',tripSchema)