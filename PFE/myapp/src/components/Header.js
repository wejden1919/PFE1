import Nav from "./Nav"
import Link from "next/link"
import "../components/myapp.css"

const Header = () => {
  return (
    
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="myapp">
  <div className="container-fluid">

    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon  "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Nav/>
    </div>
    
  </div>
  </div>
</nav>
   
 )
 
}

export default Header