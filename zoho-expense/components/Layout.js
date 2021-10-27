import Navbar from './Navbar'
import Head from "next/head";


export default function Layout({children}) {

 

    return (
        <div>
           {/* <Signin value={children}/> */}
            
             <Head>
        <title>Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="https://kit.fontawesome.com/1794b9b2a9.js"
          crossorigin="anonymous"
        ></script>
      </Head>
            {}
             <Navbar/> 
            <div >
              
            {children}
            </div>
        </div>
    )
}
