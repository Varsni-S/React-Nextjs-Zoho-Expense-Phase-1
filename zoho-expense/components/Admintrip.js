import classes from "./Admintrip.module.css";
import React, { useState,useEffect } from "react";
import NewTrips from "./Trips";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaterialTable from "material-table";
// import PatchedPagination from "PatchedPagination";


import {
  faEllipsisH,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { getOrg } from "../auth/Trips";

import { signin, authenticate, isAutheticated } from "../auth/Auth";
import router from "next/router";
import Approver from "./Approver";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

 
  export const IdPass = data => {

  let ID = data._id

  // console.log(ID)
      }

export default function AdminTrip() {

  
  const [maindata, setMaindata] = useState("");
  const [open, setOpen] = useState(false);

  const [datas,setdatas]=useState([])
  const { user } = isAutheticated();
  useEffect(() => {
    getOrg(user.org_name)
    .then((data) => {
      console.log(data);
      setdatas(data);
    })

    .catch(console.log("Get Admin Trpis request failed"));
    
  }, [])



  const handleClickOpen = (e) => {
    setOpen(true);
    setMaindata(e);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Columns = [
    { title: "Trip Id", field: "_id" },

    { title: "Departure Date", field: "depart_date" },
    { title: "Arrive At", field: "arrive_at" },
  
    // { title: "Approver", field: "approver" },
    { title: "Email", field: "email" },
    { title: "Status", field: "status" },
  ];

  return (
    <div style={{ marginLeft: "220px" }}>
      <div className={classes.header}>
        <p>Pending Trips</p>&nbsp;&nbsp;
        <p style={{ marginRight: "700px" }}>All Trips</p>
        <div className={classes.headerright}>
          <button
            className={classes.addnewtrip}
            style={{ padding: "10px 15px" }}
          >
            <Link href="/trips">
              <a>+ New Trip</a>
            </Link>
          </button>
          <button className={classes.menu} style={{ padding: "10px 10px" }}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          <button className={classes.help} style={{ padding: "10px 10px" }}>
            <FontAwesomeIcon icon={faQuestion} />
          </button>
        </div>
      </div>


      <Dialog
        open={open}
        className="mainbox"
        onClose={handleClose}
        maxWidth="800px"
      >
        <DialogTitle>
          <div style={{ display:'flex' , justifyContent:"space-between" }}>
           <lable>Trips Details</lable>
            <Button className="head" onClick={handleClose}>
              X
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Approver rowData={maindata} />
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
      
     
<link
rel="stylesheet"
href="https://fonts.googleapis.com/icon?family=Material+Icons"
></link>
<MaterialTable
title={` ${user.org_name} Trips`}
columns={Columns.map((e) => e)}
data={
  datas &&
  datas.map((e) => {
    return {
      ...e,
      // DateTime: e.DateTime
      //   ? moment(e.DateTime, "YYYY-MM-DD").format("DD MMM YYYY")
      //   : null,
    };
  })
}
// components={{
//   // Pagination: PatchedPagination,
// }}
options={{
  actionsColumnIndex: -1,
  exportAllData: true,
  exportButton: true,
  columnResizable: true,
  filtering: false,
  sorting: true,
  paging: true,
  pageSize: 5,
  emptyRowsWhenPaging: false,
  pageSizeOptions: [5, 10, 20, 30],

  headerStyle: {
    backgroundColor: "#8FD6E1",
    color: "black",
    fontSize: "14px",
    padding: "15px 5px",
    fontFamily: "Poppins, sans-serif",
  },
  cellStyle: {
    textAlign: "left",
    fontSize: "12px",
    padding: "15px 5px",
    fontFamily: "Poppins, sans-serif",
  },
}}



actions={[
    (rowData) => ({
      icon: () => (
        <button
          style={{
            fontSize: 9,
            fontWeight: 600,
            width: 60,
            borderRadius: 20,
            padding: 3,
          }}
        >
          Approve
          
        
        </button>
      ),
      tooltip: "Notes",
      onClick: (e, data) => {
        // console.log(data._id)
        // localStorage.setItem("id", JSON.stringify(data._id));
        handleClickOpen(data)

        // IdPass(data)

        // router.push("/approver")



      },
    }),

]}

/>

        
{/* 
        {datas.map((e,i)=> <div> <h6>{i+1}</h6><h6>{e.email}</h6> <h6>{e.org_name}</h6> </div>)}
        {datas.map((e,i)=> <div> <h6>{i+1}</h6><h6>{e.email}</h6> <h6>{e.org_name}</h6> </div>)} */}


    </div>
  );
}



