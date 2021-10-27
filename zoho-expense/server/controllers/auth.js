const User = require('../models/user');
const boom =require('boom')
exports.signup =async (req, reply) => {

    const cust = new User({
        name:req.body.name,
        org_name: req.body.orgname,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        state: req.body.state,
        Phone: req.body.phone
    })
    // console.log(req.body)
    // console.log(cust);
    try {
  
        console.log("initiating save command -------------------------");
        const savedUser = await cust.save();
        console.log(savedUser);
        console.log("saved dacoments-------------------------------");
        return reply.send({
        
            org_name: savedUser.org_name,
            email: savedUser.email,
            id: savedUser._id,
            name:savedUser.name
        });
    } catch (err) {
        // console.log(err,"-------------------------error");
        // throw boom.boomify(err)
         return reply.status(400).send({error:"email already exists"})
    }
};
// exports.login = async (req,res)=>{
//     try{
//     // const response=loginUser(req.body);
//     // if(response.error) 
//     //     return res.status(400).send(response.error.details[0].message);
//     // console.log('no');
//     const emailvalid= await User.findOne({email:req.body.email});
//     if(!emailvalid)return res.status(400).send("Email not exists");

//     if(req.body.pwd!=emailvalid.password)return res.status(400).send("Password wrong");
//     // var msg=await bcrypt.compare(req.body.password, emailvalid.password);
//     // console.log(msg);
//     // if(!msg)return res.status(400).send("Password wrong");
//     console.log(emailvalid)

//     const token = fastify.jwt.sign({email, password}, {expiresIn: 86400});
//     res.status(200).send({token:token })
//     }
//     catch(err){
//         throw boom.boomify(err)
//     }
    

//     // res.send("loged in");
      
// }
