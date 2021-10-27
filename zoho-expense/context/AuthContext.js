import { createContext,useState,useEffect } from "react";

import { useRouter } from "next/router";

import {NEXT_URL} from '../config/index';

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [error,setError] = useState(null)

    const router = useRouter()


    const register =async({name,orgname,country,email,password,state,phone}) => {
       console.log(name,orgname,country,email,password,state,phone); 
       const res = await fetch(`${NEXT_URL}/api/register` , {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(
            {
                name,orgname,country,email,password,state,phone
            }
        ),

    })


    const data = await res.json()
    // console.log(data.data.name);

    
    // localStorage.setItem('name', JSON.stringify(data.name)) 
    // localStorage.setItem('email', JSON.stringify(data.email))
    // localStorage.setItem('id', JSON.stringify(data.id))



    if(res.ok) {
        
      setUser(data.name)
      router.push('/home')
       
     
    }
    else {
    setError(data.error)
    setError(null)
    }
    }
       
    
     return (
         <AuthContext.Provider value={{user,error,register}}>
             {children}
         </AuthContext.Provider>
     )
}
export default AuthContext

