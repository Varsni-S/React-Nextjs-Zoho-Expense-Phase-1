const expensesmodule = require('../controllers/expense')
module.exports = async function(fastify,opts){

    
        // this endpoint for user
        fastify.get(
          "/api/expense/:expsid",
          {
            preValidation: [fastify.jwtauth]
          },
          expensesmodule.getExpenseByid

        ),

        fastify.get(
          "/api/expenseofuser/:email",{
            preValidation:[fastify.jwtauth]
          },
          expensesmodule.getExpenseForUser

          

        ),
        fastify.post(
          "/api/createexpense",
          {
            preValidation: [fastify.jwtauth]
          },
          expensesmodule.createExpense
        ),
        fastify.delete("/api/deleteexpense/:id",{
          preValidation: [fastify.jwtauth]
        },
        expensesmodule.deleteExpense),
        // this  end point for Admincreateexpense
        fastify.get(
          "/api/allexpense/:orgname",{
            preValidation: [fastify.jwtauth]
          },
         
          expensesmodule.getAllexpense
        ),
        fastify.put('/api/updateexpensestatus/:expsid',{
            preValidation: [fastify.jwtauth]
          },
          expensesmodule.updatetrips)

        



      

    
}