import Layout from "../components/Layout";
// import TripMain from "../components/TripMain";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
import Approver from "../components/Approver";
function approver() {
  return (
    <div>
      <Layout />
     
      <Head>
        <title>Trips Page </title>
      </Head>
   
      {/* <h1 style={{ marginLeft: "250px" }}>Approver Page!</h1> */}
      <Approver/>
    </div>
  );
}

export default withAuth(approver);