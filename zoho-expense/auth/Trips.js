import { FaExclamationCircle } from "react-icons/fa";
import { signin, authenticate, isAutheticated } from "../auth/Auth";

export const trips = async(trip,token) => {
  return await fetch("https://expensescodingmart.herokuapp.com/api/createtrip", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:`bearer ${token}`
    },
    body: JSON.stringify(trip)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


  export const getTrip = (email) => {
    const { token } = isAutheticated();
    // let email = user.email;
    console.log(token)
    return fetch(`https://expensescodingmart.herokuapp.com/api/tripsofuser/${email}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization : `Bearer ${token}`
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };


  export const getOrg = (org_name) => {
    const { token } = isAutheticated();
    // let email = user.email;
    console.log(token)
    return fetch(`https://expensescodingmart.herokuapp.com/api/alltrips/${org_name}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization : `Bearer ${token}`
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };



  export const deleteTrip = (_id) => {
    const { token } = isAutheticated();
    // let email = user.email;
    console.log(token)
    return fetch(`https://expensescodingmart.herokuapp.com/api/deletetrips/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization : `Bearer ${token}`
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };


  export const getId = (id) => {
    const { token } = isAutheticated();
    // let email = user.email;
    console.log(token)
    return fetch(`https://expensescodingmart.herokuapp.com/api/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization : `Bearer ${token}`
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };

  // export const statusChange = (id) => {
  //   return await fetch(`/api/updateexpensestatus/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization:`bearer ${token}`
  //     },
  //     body: JSON.stringify({

  //     })
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .catch(err => console.log(err));
  // };

  export const expenses = async(expense) => {
    const { token } = isAutheticated();
    return await fetch("https://expensescodingmart.herokuapp.com/api/createexpense", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:`bearer ${token}`
      },
      body: JSON.stringify(expense)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };



  export const getExpense = (email) => {
    const { token } = isAutheticated();
    // let email = user.email;
    console.log(token)
    return fetch(`https://expensescodingmart.herokuapp.com/api/expenseofuser/${email}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization : `Bearer ${token}`
      
      },
      
    })
      .then(response => {
        console.log(response.email)
        return response.json();
      })
      .catch(err => console.log(err));
  };