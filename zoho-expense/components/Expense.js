import classes from "./Expense.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faTimes, faPager } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import { useRouter } from "next/router";
import { signin, authenticate, isAutheticated } from "../auth/Auth";

import { expenses } from "../auth/Trips";

// toast.configure()
function Expense() {
  const router = useRouter();
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({


      email:"",
      org_name:"", 
      expense_date:"",
      merchant:"",
      category:"",
      amount:"",
      paid_through:"",
      description:"",
      ref_id:"",
      add_report:"",
      error:false,
        sucess:"",
        didRedirect:false,
        isclick:""
      
  });
  const {
    expense_date,
    email,
    org_name,
    merchant,
    category,
    amount,
    paid_through,
    description,
    ref_id,
    add_report,
  } = values;

  console.log(values);

  const handleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
      email: user.email,
      org_name: user.org_name,
    });
  };
  const succes = () => {
    toast.success(" save to the database");
    router.push("/expensemain");
  };
  // const errors =()=>{
  //   if(errors){
  //       toast.warn(errors)
  //       router.push('/expensemain')

  //   }
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, isclick: true });
    const expense = {
      // email:email,
      // org_name:org_name,
      // travel_type:travel_type,
      // trip_destination:f_Arrive_At,
      // trip_visa:true,
      // business_purpose:business_purpose,

      // depart_form:f_Departure_From,
      // arrive_at:f_Arrive_At,
      // depart_date:f_Departure_date,
      // description:f_Description,
      // location:h_location,
      // check_in:h_check_in,
      // check_out:h_check_out,
      // description_hotel:h_description,
      // approver:"admin"

      email: email,
      org_name: org_name,
      expense_date: expense_date,
      merchant: merchant,
      category: category,
      amount: amount,
      paid_through: paid_through,
      description: description,
      ref_id: ref_id,
      add_report: add_report,
    };
    expenses(expense).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,

          expense_date: "",
          merchant: "",
          category: "",
          amount: "",
          paid_through: "",
          description: "",
          ref_id: "",
          add_report: "",

          error: "",
          sucess: true,
          didRedirect: true,
        });
      }
      console.log(values);
    });
    succes();
  };

  return (
    <div style={{ marginLeft: "250px" }}>
      <div className={classes.navbar}>
        {" "}
        <h2 className={classes.heading}>
          {" "}
          <FontAwesomeIcon icon={faPager} className={classes.fas} /> &nbsp; Add
          Expense
        </h2>
        <div>
          <button className={classes.exit}>
            <Link href="/expensemain">
              <a>
                <FontAwesomeIcon icon={faTimes} />
              </a>
            </Link>
          </button>
        </div>
      </div>
      <br />
      <form onSubmit={handleSubmit} className={classes.expenseform}>
        <div className={classes.formcontact}>
          <div className={classes.date}>
            <label className={classes.label}>Expense Date</label>
          </div>

          <input
            type="date"
            className={classes.data1}
            name="expensedate"
            placeholder="Eg:31/01/2020"
            onChange={handleChange("expense_date")}
            value={values.expense_date}
            required
          />
          <br />
          <label className={classes.label}>Merchant</label>
          <br />
          <input
            type="text"
            className={classes.data1}
            name="merchant"
            placeholder="Select or Type to add"
            onChange={handleChange("merchant")}
            value={values.merchant}
            required
          />
          <br />
          <div className={classes.category}>
            <label className={classes.label}>Category</label>
          </div>

          <input
            type="text"
            className={classes.data1}
            name="category"
            placeholder="Select"
            onChange={handleChange("category")}
            value={values.category}
            required
          />
          <br />
          <div className={classes.amt}>
            <label className={classes.label}>Amount</label>
          </div>
          <input
            type="text"
            className={classes.data1}
            name="amount"
            placeholder="Type the amount"
            onChange={handleChange("amount")}
            value={values.amount}
            required
          />
          <br />
          <label className={classes.label}>Paid Through</label>
          <br />
          <input
            type="text"
            className={classes.data1}
            name="Paid Through"
            placeholder="Select"
            onChange={handleChange("paid_through")}
            value={values.paid_through}
            required
          />
          <br />
          <label className={classes.label}>Description</label>
          <br />
          <input
            type="text"
            className={classes.data1}
            name="description"
            placeholder="Max of 250 words"
            onChange={handleChange("description")}
            value={values.description}
            required
          />
          <br />
          <label className={classes.label}>Refernce#</label>
          <br />
          <input
            type="text"
            className={classes.data1}
            name="refernce"
            placeholder="Type your Refernce"
            onChange={handleChange("ref_id")}
            value={values.ref_id}
            required
          />
          <br />
          <label className={classes.label}>Add to Report</label>
          <br />
          <input
            type="text"
            className={classes.data1}
            name="addtoreport"
            placeholder="Add your Reports"
            onChange={handleChange("add_report")}
            value={values.add_report}
            required
          />
        </div>
        {/* <div className={classes.btn}>
          <button className={classes.savebtn}>
            <label>Save and Close</label>
          </button>               */}

        <div className={classes.btn}>
          <input
            type="submit"
            className={classes.savebtn}
            value="Add Expense"
          />
          &nbsp;&nbsp;&nbsp;
        </div>
      </form>
    </div>
  );
}
export default Expense;
