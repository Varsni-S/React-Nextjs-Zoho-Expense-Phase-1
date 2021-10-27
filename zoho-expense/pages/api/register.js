import cookie from 'cookie'
import { API_URL } from '../../config/index';

export default async (req,res) => {
    if(req.method === 'POST') {
        const {orgname,country,email,password,state,phone} = req.body;

        console.log(req.body);

        const fastifyRes = await fetch(`${API_URL}/api/signup`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                orgname,
                country,
                email,
                password,
                state,
                phone
            }),
        })
        
        const data = await fastifyRes.json()
     
        if(fastifyRes.ok) {
            //set cookie
            res.setHeader('Set-Cookie',cookie.serialize(
               'token',data.token,{
                  httpOnly:true,
                  secure: process.env.NODE_ENV !== 'development',
                  maxAge: 60 * 60 * 24 * 7,
                  sameSite: 'strict',
                  path:'/'
               } 
            ))
            res.status(200).json({user: data.user})
           }

        else{
            
            res
            .status(data.statusCode)
            .json({ message: 'some prob' })  
            console.log("Error");
               }


    } else {
        res.setHeader('Allow',['POST'])

        res.status(405).json({
            message: `Method ${req.method} not allowed`
        })
    }
} 