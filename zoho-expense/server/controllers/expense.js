const Expense = require('../models/expenses');
const boom =require('boom');
const expense = require('../fastify-router.js/expense');

exports.createExpense = async function(req,reply){
     
    const expense=new Expense({
        
        email:req.body.email,
        org_name:req.body.org_name,
        // trip_no:trip_id,
        expense_date:req.body.expense_date,
        merchant:req.body.merchant,
        category:req.body.category,
        amount:req.body.amount,
        paid_through:req.body.paid_through,
        description:req.body.description,
        ref_id:req.body.ref_id,
        add_report:req.body.add_report,
        
    })
    try {
        
        const SaveExpense = await expense.save();
        console.log(SaveExpense);
        return reply.send(SaveExpense);
    } catch (err) {
        throw boom.boomify(err)
    }
};
exports.deleteExpense = async function(req,reply){
    try{
        const response =await Expense.deleteOne({_id:req.params.id})
        return reply.send("sucessfully deleted")

    }
    catch(er){
        throw  boom.boomify(err)

    }


}
exports.getExpenseByid =async function(req,reply){
    try{
        const res = await Expense.findOne({_id:req.params.expsid})
        return reply.send(res)

    }
    catch(er){
        throw boom.boomify(er)
    }
};
exports.getAllexpense =async function(req,reply){
    try{
        const res = await Expense.find({org_name:req.params.orgname})
        return reply.send(res)
    }
    catch(er){
        throw boom.boomify(er)
    }


} 
exports.getExpenseForUser =async function(req,reply){
    try{
        const res = await Expense.find({email:req.params.email})
        return reply.send(res)
    }
    catch(er){
        throw boom.boomify(er)
    }
}  
exports.updatetrips = async function(req,reply){
    try{
        let checking = {
            _id:req.params.expsid,
        }
        const  res= await Expense.findOneAndUpdate({_id:req.params.expsid},
            {status:req.body.status})
            return reply.send(res)
    }
    catch(er){
        throw boom.boomify(er)
    }
} 

