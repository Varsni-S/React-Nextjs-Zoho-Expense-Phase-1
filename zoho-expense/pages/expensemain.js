import Layout from "../components/Layout";
import ExpenseMain from "../components/ExpenseMain";
import Head from "next/head";
import withAuth from "../auth/prodectedroutes"

function home() {
  return (
    <div>
      <Layout />
      <ExpenseMain />
      <Head>
        <title>Expense Page</title>
      </Head>
    </div>
  );
}

export default withAuth(home);
