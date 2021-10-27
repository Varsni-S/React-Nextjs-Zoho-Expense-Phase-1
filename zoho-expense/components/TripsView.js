import { getId } from "../auth/Trips";
import { useEffect, useState } from "react";
import { signin, authenticate, isAutheticated } from "../auth/Auth";
import { useRouter } from 'next/router';
import IdPass from "./Admintrip";
import { Button } from "@material-ui/core";
import { padding } from "@mui/system";
// import { removeData } from "jquery";
const TripsView = ({rowData}) => {

    const { token } = isAutheticated();

    
    const router = useRouter()

    const [ data , setData] = useState({})
    const [result , setResult] = useState("");
      
    useEffect(() => {
   getId(rowData._id).then((data) => {
    setData(data);

})

.catch(console.log("Get Trpis request failed"));

},[])

function setLog(e) {
    // console.log(e)
    // setResult(e)

   

        fetch(`https://expensescodingmart.herokuapp.com/api/updatetrips/${data._id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization:`bearer ${token}`
            },
            body: JSON.stringify({
                "status":e
            })
          })
            .then(response => {
              return response.json();
            })
            .catch(err => console.log(err));
      
  router.push('/') ; 

}
    return (

        <div style={{padding:100,paddingTop:0}}>
            {/* <h1>Trip Details</h1> */}

           <h2>Trip Id:  {data._id}</h2>
          <h2>Organization Name : {data.org_name}</h2>

          <br/>
          <br/>
           <h3>Business Purpose : {data.business_purpose} </h3>
           <h3> Arrive at : {data.arrive_at} </h3>
           <h3>Departure Date: {data.depart_date} </h3>
           <h3>Location:{data.location}</h3>
           <h3> CheckIn : {data.check_in} </h3>
           <h3> CheckOut : {data.check_out}</h3>

        </div>
    )
}

export default TripsView
