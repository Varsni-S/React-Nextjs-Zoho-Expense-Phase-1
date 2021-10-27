const userData = require('../controllers/auth');

const routes=[
    {
        
            method: 'POST',
            url: '/api/signup',
            
            handler: userData.signup
        
    },
   
    
]
module.exports=routes