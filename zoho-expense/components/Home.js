import classes from "./Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import {  authenticate, isAutheticated } from "../auth/Auth";

function Home() {

  const { user } = isAutheticated();

  return (
    <div className={classes.content}>
     
      <div className={classes.navhead}>
      <h1>Hai {user.name} ,</h1>
        <h2 className={classes.head}>
          Welcome <br />
          Let's Get Started!
        </h2>
        <p className={classes.para}>
          Learn to manage individual business travel and spend.
        </p>
      </div>
      <div className={classes.adddetails}>
        <div className={classes.trip}>
          <div>
            <h3>
              <i class="fas fa-suitcase-rolling"></i> Create Trip{" "}
            </h3>
            <br />
            <p>
              Raise business trip requests, add itinerary and submit for
              approval.
            </p>
          </div>
          <div>
            <button
              className={classes.addnewtrip}
              style={{ padding: "10px 15px" }}
            >
              <Link href="/trips">
                <a>+ New Trip</a>
              </Link>
            </button>
          </div>
        </div>
        <div className={classes.expense}>
          <div>
            {" "}
            <h3>
              <FontAwesomeIcon icon={faPager} className={classes.fas} /> Create
              Expense{" "}
            </h3>
            <br />
            <p> Upload receipts automatically and Convert to expenses.</p>
          </div>
          <div>
            <button
              className={classes.addnewexpense}
              style={{ padding: "10px 15px" }}
            >
              <Link href="/expense">
                <a>+ New Expense</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
