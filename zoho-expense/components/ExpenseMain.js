import classes from "./ExpenseMain.module.css";
import React, { useState,useEffect } from "react";
import NewTrips from "./Trips";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaterialTable from "material-table";
// import PatchedPagination from "PatchedPagination";

import { useRouter } from "next/router";

import { signin, authenticate, isAutheticated } from "../auth/Auth";


import {
  faEllipsisH,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { getExpense, deleteTrip } from "../auth/Trips";


export default function ExpenseMain() {
  const router = useRouter();

  const { user } = isAutheticated();

  const [datas, setdatas] = useState([]);

  console.log(user.email);
  useEffect(() => {
    getExpense(user.email)
      .then((data) => {
        console.log(data);
        setdatas(data);
      })

      .catch(console.log("Get Expense request failed"));
  }, []);

  const Columns = [
    { title: "Expense Date", field: "expense_date" },

    { title: "Merchant", field: "merchant" },
    { title: "Category", field: "category" },
    { title: "Amount", field: "amount" },
    { title: "Payment Mode", field: "paid_through" },
    { title: "Description", field: "description" },
  ];

  return (
    <div style={{ marginLeft: "220px" }}>
      <div className={classes.header}>
        <p>Pending Expense</p>&nbsp;&nbsp;
        <p style={{ marginRight: "700px" }}>All Expense</p>
        <div className={classes.headerright}>
          <button
            className={classes.addnewtrip}
            style={{ padding: "10px 15px" }}
          >
            <Link href="/expense">
              <a>+ New Expense</a>
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

      {/* <div className={classes.list}>
        <div className={classes.listdetails}> */}
      {/* <div className={classes.check}>
            <input type="checkbox" id="scales" name="scales" />
          </div>
          <div className={classes.tripno}>TRIP#</div>
          <div className={classes.tripdetail}>TRIP DETAILS</div>
          <div className={classes.dest}>DESTINATION</div>
          <div className={classes.status}>STATUS</div>
          <div className={classes.approver}>APPROVER</div>
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div> */}
      {/* 
<table className={classes.styledtable}>
    <thead>
        <tr>
            <th>Trip Name</th>
            <th>Dapature Date</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Approver</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> {datas.map((e,i)=> <h6>{e.org_name}</h6> )}</td>
            <td>{datas.map((e,i)=> <h6>{e.depart_date}</h6> )}</td>
            <td>{datas.map((e,i)=> <h6>{e.arrive_at}</h6> )}</td>
            <td>{datas.map((e,i)=> <h6>{e.status}</h6> )}</td>
            <td>{datas.map((e,i)=> <h6>{e.approver}</h6> )}</td>
            <td>{datas.map((e,i)=> <h6>{e.email}</h6> )}</td>
            </tr>  
    </tbody>
</table> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <MaterialTable
        title={"Expense List"}
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

        // actions={[
        //   (rowData) => ({
        //     icon: () => (
        // <button
        //   style={{
        //     fontSize: 9,
        //     fontWeight: 600,
        //     width: 60,
        //     borderRadius: 20,
        //     padding: 3,
        //   }}
        // >
        //   Delete
        // </button>
        //     ),
        //     tooltip: "Notes",
        //     onClick: (e, data) => {

        //       alert('Deleted Succesfully')
        //       router.push('/home')
        //       router.push('/expensemain')

        //     },
        //   }),

        // ]}
      />

      {/* 
        {datas.map((e,i)=> <div> <h6>{i+1}</h6><h6>{e.email}</h6> <h6>{e.org_name}</h6> </div>)}
        {datas.map((e,i)=> <div> <h6>{i+1}</h6><h6>{e.email}</h6> <h6>{e.org_name}</h6> </div>)} */}
    </div>
  );
}
