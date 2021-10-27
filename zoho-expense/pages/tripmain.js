import Layout from "../components/Layout";
import TripMain from "../components/TripMain";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"
function home() {
  return (
    <div>
      <Layout />
      <TripMain />
      <Head>
        <title>Trips Page </title>
      </Head>
    </div>
  );
}

export default withAuth(home);
