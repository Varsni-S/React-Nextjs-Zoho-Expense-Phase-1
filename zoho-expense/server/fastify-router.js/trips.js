const tripsmodule = require('../controllers/trips')
module.exports = async function(fastify,opts){

    
        // this endpoint for user
        fastify.get(
          "/api/:tripsid",
          {
            preValidation: [fastify.jwtauth]
          },
          tripsmodule.getTripsByid

        ),

        fastify.get(
          "/api/tripsofuser/:email",{
            preValidation:[fastify.jwtauth]
          },
          tripsmodule.getTripForUser

          

        ),
        fastify.post(
          "/api/createtrip",
          {
            preValidation: [fastify.jwtauth]
          },
          tripsmodule.createtrips
        ),
        fastify.delete("/api/deletetrips/:id",{
          preValidation: [fastify.jwtauth]
        },
        tripsmodule.deletetrips),
        // this  end point for Admin
        fastify.get(
          "/api/alltrips/:orgname",{
            preValidation: [fastify.jwtauth]
          },
         
          tripsmodule.getAllTrip
        ),
        fastify.put('/api/updatetrips/:tripsid',{
          preValidation: [fastify.jwtauth]
        },
        tripsmodule.updatetrips)
        



      

    
}