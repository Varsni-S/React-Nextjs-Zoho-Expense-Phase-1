import Layout from "../components/Layout";
import Expanse from "../components/Expense";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"

function trips() {
  return (
    <div>
      <Head>
        <title>Add Expense</title>
      </Head>
      <Expanse />
    </div>
  );
}
export default withAuth(trips);
