import Layout from "../components/Layout";
import Trips from "../components/Trips";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
function trips() {
  return (
    <div>
      <Head>
        <title>Add Trips</title>
      </Head>

      <Trips />
    </div>
  );
}
export default withAuth(trips);
