import Layout from "../components/Layout";
import Profile from "../components/Profile";

import Trips from "../components/Trips";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
function profile() {
  return (
    <div>
      <Head>
        <title>Add Trips</title>
      </Head>

      <Layout />


      <Profile/>
    </div>
  );
}
export default withAuth(profile);