import { isAutheticated } from "../auth/Auth";
// import image from "next/image";
import classes from "./Profile.module.css";
import Image from "next/image";
import Head from "next/head";

import travel from "../public/profile.jpg";
{
  /* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */
}

function Profile() {
  const { user } = isAutheticated();
  return (
    <>
      <Head>
        <title>Profile page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
      </Head>
      <div style={{ marginLeft: "250px" }}>
      <br/>
        <br/>

        <br/>
        <h2 style={{ textAlign: "center" }}>User Profile </h2>
        <br/>
        

        <br/>

        <div className={classes.cards}>
          <Image src={travel} alt="John" className={classes.imgs} style={{ width: "100%" }} />
          <h1>{user.name}</h1>
          <p className={classes.title}>{user.org_name}</p>
          <p>{user.email}</p>
          <p>{user.state}</p>
          <p>{user.country}</p>
          <div style={{ margin: "24px 0" }}>
            <a  className={classes.aa}>
              <i class="fa fa-dribbble"></i>
            </a>
            <a className={classes.aa}>
              <i class="fa fa-twitter"></i>
            </a>
            <a  className={classes.aa}>
              <i class="fa fa-linkedin"></i>
            </a>
            <a  className={classes.aa}>
              <i class="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            <button className={classes.button}>Contact</button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
