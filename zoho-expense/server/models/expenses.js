
var mongoose=require('mongoose');

const { ObjectId } = mongoose.Schema;


const expenseSchema=new mongoose.Schema({

   email:{
       type: String,
       required:true
   },
   org_name:{
       type: String,
       required:true

   },

    expense_date:{
        type:String,
    },
    merchant:{
        type:String,
        min:6,
        max:255
    },
    category:{
        type:String,
        min:6,
        max:255
    },
    amount:{
        type:String,
        min:6,
        max:255
    },
    paid_through:{
        type:String,
        min:6,
        max:255
    },
    description:{
        type:String,
        min:6,
        max:255
    },
    ref_id:{
        type:String,
        min:6,
        max:255

    },
    add_report:{
        type:String,
        min:6,
        max:255

    },
    status:{
        type:String,
        default:"pending",
        enum: ['approved','remove','pending']
    },
    approver:{
        type:String,
        default:"Admin"
    }

})
   

module.exports=mongoose.model('expense',expenseSchema)