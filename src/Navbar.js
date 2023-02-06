import { Link } from "react-router-dom";

function Navbar(){
    return(
        

<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container d-flex justify-content-between">
  <Link className="navbar-brand fs-3" to={"/"}>Movies</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"login"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"register"}>Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    )
}


export default Navbar;






