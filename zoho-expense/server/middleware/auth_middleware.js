const fastifyPlugin = require('fastify-plugin');
const User = require('../models/user')

module.exports = fastifyPlugin(async (fastify)=>{
    fastify.decorate('jwtauth', async (req,res)=>{
        try {
            await req.jwtVerify();
        } catch (error) {
            res.send(error);
        }
    })
    fastify.decorate('isAdmin',async (req,reply)=>{
        const id = usereq.params.id
            const admin = await  User.findById(courseid)
            console.log(admin.role)
            

        
            if (admin.role === 0) {
                return reply.status(200).send({
                  message: "You are  not ADMIN, Access deined"
                });
              }
              
            
           
        
    })

})