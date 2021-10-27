import withAuth from "../auth/prodectedroutes"
import Home from "../components/Home"
import Layout from "../components/Layout"


function home() {
    return (
        <div>
          
          <Layout/>
          <Home/>
            
         </div>
    )
}

export default withAuth(home)
