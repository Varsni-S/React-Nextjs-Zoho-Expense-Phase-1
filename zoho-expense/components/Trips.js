import React, { useState,useEffect } from 'react';
import classes from './Trips.module.css'
import Link from "next/link";
import { useRouter } from 'next/router';
import { trips } from "../auth/Trips";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
// import 'bootstrap/dist/css/bootstrap.css';

import { signin, authenticate, isAutheticated } from "../auth/Auth";

// import the library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";







// import your icons
import { faSuitcaseRolling, faTimes, faPlane,faHotel } from '@fortawesome/free-solid-svg-icons';

function NewTrips(){
    const router = useRouter()
    const { user,token } = isAutheticated();
    

    
    const [values, setValues] = useState({
        email:"",
        org_name:"",
        travel_type:"",
        trip_name:"",
        business_purpose:"",
        f_Departure_From:"",
        f_Arrive_At:"",
        f_Departure_date:"",
        f_Description:"",
        h_location:"",
        h_check_in:"",
        h_check_out:"",
        h_description:"",
        error:false,
        sucess:"",
        didRedirect:false,
        isclick:""
        
    });
    const {travel_type,email,org_name,trip_name,business_purpose,f_Departure_date,f_Arrive_At,f_Departure_From,f_Description,h_location,h_check_in,h_check_out,h_description,error,sucess,didRedirect,isclick}=values

console.log(values)


const handleChange = name => event => {
    setValues({ ...values,[name]:event.target.value,email:user.email,org_name:user.org_name});
  };
  const succes =()=>{
    if(sucess){
        toast.success(" save to the database")
        router.push('/tripmain')

      }

}
const errors =()=>{
    if(error){
        toast.warn(error)
        router.push('/trips')

    }
} 
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({...values,isclick:true})
    const trip={
        email:email,
        org_name:org_name,
        travel_type:travel_type,
        trip_destination:f_Arrive_At,
        trip_visa:true,
        business_purpose:business_purpose,
        
        depart_form:f_Departure_From,
        arrive_at:f_Arrive_At,
        depart_date:f_Departure_date,
        description:f_Description,
        location:h_location,
        check_in:h_check_in,
        check_out:h_check_out,
        description_hotel:h_description,
    
    
        approver:"admin"
        }
        trips(trip,token).then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
    
            }
            else{
                setValues({...values,
                    travel_type:"",
            trip_name:"",
            business_purpose:"",
            f_Departure_From:"",
            f_Arrive_At:"",
            f_Departure_date:"",
            f_Description:"",
            h_location:"",
            h_check_in:"",
            h_check_out:"",
            h_description:"",
            error:"",
            sucess:true,
            didRedirect:true
    
                })
            }
            console.log(values)
        })
        succes();
        errors();
        
       
    
   
   
     

  
    

};
//   const trip={
//     email:email,
//     org_name:org_name,
//     travel_type:travel_type,
//     trip_destination:f_Arrive_At,
//     trip_visa:true,
//     business_purpose:business_purpose,
    
//     depart_form:f_Departure_From,
//     arrive_at:f_Arrive_At,
//     depart_date:f_Departure_date,
//     description:f_Description,
//     location:h_location,
//     check_in:h_check_in,
//     check_out:h_check_out,
//     description_hotel:h_description,


//     approver:"admin"
//     }
//     const succes =()=>{
//         if(sucess){
//             toast.success(" save to the database")
//           }

//     }
//     const errors =()=>{
//         if(error){
//             toast.warn(error)
//         }
//     } 
//     useEffect(() => {
//         trips(trip,token).then(data=>{
//             if(data.error){
//                 setValues({...values,error:data.error})
    
//             }
//             else{
//                 setValues({...values,
//                     travel_type:"",
//             trip_name:"",
//             business_purpose:"",
//             f_Departure_From:"",
//             f_Arrive_At:"",
//             f_Departure_date:"",
//             f_Description:"",
//             h_location:"",
//             h_check_in:"",
//             h_check_out:"",
//             h_description:"",
//             error:"",
//             sucess:true,
//             didRedirect:true
    
//                 })
//             }
//             console.log(values)
//         })
//         succes();
//         errors();

      
//     }, [values.isclick===true])
const successMessage = () => {
    return (
      
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success" style={{ display: sucess ? "" : "none" }}>
        <AlertTitle >Sucess</AlertTitle>
        trip created sucessfully — <strong><Link href="/tripmain">check it out!</Link></strong>
      </Alert>
      </Stack>
    );
  };

  const errorMessage = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error" style={{ display: error ? "" : "none" }}>
        <AlertTitle >error</AlertTitle>
        {error} — <strong><Link href="/trips">Try again!</Link></strong>
      </Alert>
      </Stack>
    );
  };
   
 
const tripsform =()=>{
    return(
        <div>
            <div>
                <div className={classes.navbar}>
                    <h2 className={classes.topic}>
                        <FontAwesomeIcon icon={faSuitcaseRolling} style={{width:'50px'}}/>
                        New Trip
                    </h2>
                    <div>
                        
                        <button className={classes.exitbtn}>
                            <Link href="/tripmain">
                                <a><FontAwesomeIcon icon={faTimes}/></a>
                            </Link>
                        </button>
                    </div>
                </div>
                <form onSubmit={handleSubmit}> 
                    <div>
                        <div className={classes.formmargin}>
                            <div>
                                <div className={classes.traveltype}>
                                    <label>Travel Type</label>
                                    <div className={classes.travelbtn}>
                                        <button className={classes.travelbtntype}>
                                            <input  onChange={handleChange("travel_type")} value="domestic" type="radio"  name="name" required/>
                                            <label>Domestic</label>
                                        </button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button className={classes.travelbtntype}>
                                            <input  onChange={handleChange("travel_type")} value="international" type="radio" name="name" required/>
                                            <label>International</label>
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className={classes.tripname}>
                                    <label className={classes.tripnamereq}>Trip Name </label><br />
                                    <input placeholder="eg: Trip to New York" className={classes.tripnameinput} type="text" onChange={handleChange("trip_name")}
                                                 value={values.trip_name} required
                                                 
                                    />
                                </div>
                                <br/>
                                <div className={classes.buspurp}>
                                    <label><span>Business Purpose</span></label><br/>
                                    <textarea rows="3" name="business_purpose" placeholder="Max 250 characters" className={classes.buspurptext} 
                                    onChange={handleChange("business_purpose")}
                                    value={values.business_purpose} type="text" required
                                    ></textarea>
                                </div>
                                <br/>
                                <div className={classes.tripitinerary}>
                                    <div className={classes.itinerarytitle}>
                                        <span>TRIP ITINERARY</span>
                                    </div>
                                    <hr />
                                    <div>
                                        <section  className={classes.itinerarytypesec}>
                                        <div className={classes.itinerarytype}>
                                            <div className={classes.itinerarytypeflight}>
                                                <div className={classes.itinerarytypeplane}><FontAwesomeIcon icon={faPlane} /></div>
                                            </div>
                                            <span>Flight</span>
                                        </div>
                                        </section>
                                        <aside className={classes.itinerarytypedetailsaside}>
                                        <div className={classes.itinerarytypedetails}>
                                            
                                            {/* <div className={classes.itinerarytraveltypedetails}>
                                                <div  className={classes.itinerarytypedetailscursor}>
                                                    <label className={classes.itinerarytypedetailslabel}>
                                                        <input type="radio" className={classes.itinerarytypedetailsinput} name="names"  onChange={handleChange("oneWay")}
                                                       value={values.oneWay}/>
                                                        One Way
                                                    </label>&nbsp;&nbsp;&nbsp;
                                                    <label className={classes.itinerarytypedetailslabel} >
                                                        <input type="radio" className={classes.itinerarytypedetailsinput} name="names" onChange={handleChange("oneWay")}
                                                 value={values.oneWay}/>
                                                        Round Trip
                                                    </label>&nbsp;&nbsp;&nbsp;
                                                    <label className={classes.itinerarytypedetailslabel}>
                                                        <input type="radio" className={classes.itinerarytypedetailsinput} name="names" onChange={handleChange("oneWay")}
                                                 value={values.oneWay}/>
                                                        Multi-city
                                                    </label>
                                                </div>
                                                <hr/>
                                            </div> */}
                                            <div className={classes.itinerarytraveltypedetailsoption}>
                                                <div className={classes.itinerarytraveltypedetailsoptiondeparr}>
                                                    <div className={classes.itinerarytraveltypedetailsoptiondeparrdep}>DEPART FROM</div>
                                                    <div className={classes.itinerarytraveltypedetailsoptiondeparrarr}>ARRIVE AT</div>
                                                </div>
                                                <div className={classes.itinerarytraveltypedetailsoptiondepdt}>DEPARTURE DATE</div>
                                                <div className={classes.itinerarytraveltypedetailsoptiondesc}>DESCRIPTION</div>
                                            </div>
                                            <div className={classes.itinerarytraveltypedetailsoptiondet}>
                                                <div className={classes.itinerarytraveltypedetailsoptiondetdes}>
                                                    <div className={classes.itinerarytraveltypedetailsoptiondetdescity}>
                                                        <div className={classes.itinerarytraveltypedetailsoptiondetdescitydep}>
                                                            <input type="text" placeholder="Select City" className={classes.itinerarytraveltypedetailsoptiondetdescitydepinput} onChange={handleChange("f_Departure_From")}
                                                 value={values.f_Departure_From} required/>
                                                        </div>
                                                        <div  className={classes.itinerarytraveltypedetailsoptiondetdescityarr}>
                                                            <input type="text" placeholder="Select City" className={classes.itinerarytraveltypedetailsoptiondetdescitydepinput} onChange={handleChange("f_Arrive_At")}
                                                 value={values.f_Arrive_At} required/>
                                                        </div>
                                                    </div>&nbsp;
                                                    <div className={classes.itinerarytraveltypedetailsoptiondetdescitydptdt}>
                                                        <input type="date" placeholder="eg: 31 Jan 2020" className={classes.itinerarytraveltypedetailsoptiondetdescitydptdtinput} onChange={handleChange("f_Departure_date")}
                                                 value={values.f_Departure_date}
                                                       required />
                                                    </div>&nbsp;
                                                    <div className={classes.itinerarytraveltypedetailsoptiondetdescitydesc}>
                                                        <input type="text" placeholder="Description" className={classes.itinerarytraveltypedetailsoptiondetdescitydescinput}
                                                      onChange={handleChange("f_Description")}
                                                      value={values.f_Description} required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        </aside>
                                        <br/>
                                        <section  className={classes.itinerarytypesec}>
                                        <div className={classes.itinerarytype}>
                                            <div className={classes.itinerarytypeflight}>
                                                <div className={classes.itinerarytypehotel}><FontAwesomeIcon icon={faHotel} /></div>
                                            </div>
                                            <span>Hotel</span>
                                        </div>
                                        </section>
                                        <aside className={classes.itinerarytypedetailsaside}>
                                        <div className={classes.itinerarytypedetails}>
                                            
                                            <div className={classes.itinerarytraveltypedetailsoption}>
                                                <div className={classes.itinerarytraveltypedetailsoptionhotelloc}>LOCATION</div>
                                                <div className={classes.itinerarytraveltypedetailsoptionhotelchin}>CHECK IN</div>
                                                <div className={classes.itinerarytraveltypedetailsoptionhotelchout}>CHECK OUT</div>
                                                <div className={classes.itinerarytraveltypedetailsoptionhoteldesc}>DESCRIPTION</div>
                                            </div>
                                            <div className={classes.itinerarytraveltypedetailsoptiondet}>
                                                <div className={classes.itinerarytraveltypedetailsoptiondetdes}>
                                                    <div className={classes.itinerarytraveltypedetailsoptiondetdescity}>
                                                            <input type="text" placeholder="Select or Type City" className={classes.itinerarytraveltypedetailsoptiondetdescitydepinput} 
                                                                 onChange={handleChange("h_location")}
                                                                value={values.h_location} required
                                                            />&nbsp;
                                                            <input type="time" placeholder="eg: 31 Jan 2020" className={classes.itinerarytraveltypedetailsoptiondetdescitydepinput} 
                                    
                                                            onChange={handleChange("h_check_in")}
                                                            value={values.h_check_in} required
                                                            />&nbsp;
                                                            <input type="time" placeholder="eg: 31 Jan 2020" className={classes.itinerarytraveltypedetailsoptiondetdescitydptdtinput} 
                                                           onChange={handleChange("h_check_out")}
                                                           value={values.h_check_out} required
                                                            />&nbsp;
                                                            <input type="text" placeholder="Description" className={classes.itinerarytraveltypedetailsoptiondetdescitydescinput} 
                                                            onChange={handleChange("h_description")}
                                                            value={values.h_description} required
                                                            />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.endbtn}>
                            

                            <input type="submit" className={classes.endbtnsavetype} value="Register"    />
                            &nbsp;&nbsp;&nbsp;
                          
                        </div>
                        
                    </div>

                </form>
            </div>
        </div>
    )}
    return(
       
        <div>
        {successMessage()}
        {errorMessage()}
        {tripsform()}
        </div>
    )
}
export default NewTrips
