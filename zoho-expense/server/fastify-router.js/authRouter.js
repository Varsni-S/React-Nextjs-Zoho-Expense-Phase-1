const boom = require('boom');
const User =require('../models/user');
async function AuthRouter(fastify){

    fastify.post('/api/login', async (req,res)=>{
        try {
            const {email,  password} = req.body;
            if(!email || !password){
                res.status(400).send({error: "email and pasword are required"});
                return;
            }
            const emailvalid= await User.findOne({email:req.body.email});
    if(!emailvalid)return res.status(400).send({error:"Email not exists"});

    if(req.body.password!=emailvalid.password)return res.status(400).send({error:"Password wrong"});
            // //DB checks
            // let userData = await db.query("SELECT email from user where user_id=?",[userid]);
            // if(userData && userData.lenth>0){
            //     //generate JWT
            // }
         const token = fastify.jwt.sign({email, password}, {expiresIn: 86400});
         const { _id,org_name,  role,country,state,phone,name } = emailvalid;
         res.status(200).send({user:{ _id, org_name, email, role,country,state,phone,name},token})
        } catch (error) {
            throw boom.boomify(error);
        }
    })

}

module.exports = AuthRouter;