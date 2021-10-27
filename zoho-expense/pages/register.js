import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState,useEffect,useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/AuthForm.module.css'
import AuthContext from '../context/AuthContext'
import { useFormik } from 'formik';
import * as yup from 'yup'
import Image from 'next/image'
import { useRouter } from 'next/router'
import travel from '../public/travelimg3.jpeg'
import { signup } from '../auth/Auth'

function index() {
  const router = useRouter();
  const[err,seterr]=useState('')
  const[sucess,setsucess] =useState('')
  // const [orgname,setOrgname] = useState('')
  //  const [country,setCountry] = useState('')
  //  const [email,setEmail] = useState('')
  //  const [password, setPassword] = useState('')
  //  const [state,setState] = useState('')
  //  const [phone,setPhone] = useState('')
   
   const {register , error} =useContext(AuthContext)

   const formik = useFormik({
     initialValues:{
       name:'',
       orgname:'',
       country:'',
       email:'',
       password:'',
       state:'',
       phone:''
     },
     validationSchema:yup.object({
      name:yup.string()
      .min(7,"Minimum 7 Characters required")
      .max(20,"Maximum 20 characters requied"),

       orgname:yup.string()
       .min(7,"Minimum 7 Characters required")
       .max(20,"Maximum 20 characters requied"),

       country:yup.string()
       .min(3,"Minimum 3 Characters required")
       .max(20,"Maximum 20 characters requied"),
   
     email:yup.string()
     .email()
     .min(7,"Minimum 7 Characters required")
     .max(40,"Maximum 40 characters requied"),
  
   password:yup.string()
   .min(7,"Minimum 7 Characters required")
   .max(20,"Maximum 20 characters requied"),
    
  state:yup.string()
 .min(3,"Minimum 3 Characters required")
 .max(20,"Maximum 20 characters requied"),

phone:yup.string()
.min(10,"Please type 10 digit number")
.max(11,"Maximum 11 characters requied")
}),
     onSubmit: (data) => {
       console.log(data.orgname);
       let name = data.name
       let orgname = data.orgname
       let country = data.country 
       let email = data.email 
       let password = data.password
       let state = data.state 
       let phone = data.phone 
  
       console.log({name,orgname,country,email,password,state,phone})
      signup({name,orgname,country,email,password,state,phone}).then(data=>{
      if(data.error){
        alert(data.error)

      }
      else{
        router.push("/")
      }
      }).catch(err=>{
        console.log("try again later")
      })
      
      
    }
   }

   )



   
  return (
    <>
    <div className={styles.reg}>
     <div className={styles.auth}>
         <h2 style={{color:"#008cba"}}>
           <FaUser/>Codingmart Expenses Register 
         </h2>
         <ToastContainer />
         <form onSubmit={formik.handleSubmit} autoComplete="off">
         <div>
             <label htmlFor="username">User Name</label>
             <input type="text" id="username" name="name" 
               value={formik.values.name}
              onChange={ formik.handleChange} required
             
              />
              { formik.errors.name ? 
                <div style={{color:"red"}}>{formik.errors.name}</div>:null
            }
           </div>
           <div>
             <label htmlFor="orgname">Organization Name</label>
             <input type="text" id="orgname" name="orgname" 
               value={formik.values.orgname}
              onChange={ formik.handleChange} required
             
              />
              { formik.errors.orgname ? 
                <div style={{color:"red"}}>{formik.errors.orgname}</div>:null
            }
           </div>

           

           <div>
             <label htmlFor="country">Country</label>
             <input type="text" id="country" 
              name="country" value={formik.values.country}
               onChange={formik.handleChange} required
              />
               { formik.errors.country ? 
                <div style={{color:"red"}}>{formik.errors.country}</div>:null
            }
           </div>
           <div>
             <label htmlFor="email">Email Address</label>
             <input type="email" id="email" 
              name="email" value={formik.values.email} required
               onChange={formik.handleChange}
              />
               { formik.errors.email ? 
                <div style={{color:"red"}}>{formik.errors.email}</div>:null
            }
           </div>
           <div>
             <label htmlFor="password">password</label>
             <input type="password" id="password" 
              name="password" value={formik.values.password} required
               onChange={formik.handleChange}
              />
               { formik.errors.password ? 
                <div style={{color:"red"}}>{formik.errors.password}</div>:null
            }
            </div>

            <div>
             <label htmlFor="state">State</label>
             <input type="text" id="state" 
              name="state" value={formik.values.state}
             onChange={formik.handleChange} required
              />
               { formik.errors.state ? 
                <div style={{color:"red"}}>{formik.errors.state}</div>:null
            }
           </div>

           <div>
             <label htmlFor="phone">Phone Number</label>
             <input type="text" id="phone" required
             name="phone" value={formik.values.phone} 
              onChange={formik.handleChange}
              />
               { formik.errors.phone ? 
                <div style={{color:"red"}}>{formik.errors.phone}</div>:null
            }
           </div>

              <input type="submit" value="Register" className={styles.button}   />
           
         </form>

         <p>
           Already had an Account ? 
           <Link href='/signin'> Login</Link>
         </p>
     </div>
     <div className={styles.rigimg}> 
        <Image src={travel} layout="responsive" />
      </div>
    </div>
    </>
  );
}
export default index;
 