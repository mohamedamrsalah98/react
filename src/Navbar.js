import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";

function Navbar(props){
  const Count=useSelector((state)=>state.movie.Movies.length)
  useEffect(() => {
    const element = document.getElementById('box');
    element.textContent=Count
  }, [Count]);

// ======================================================

const {theme, setTheme}=useContext(ThemeContext)

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
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={`/Fav/${props.id}`}>
            <div className="position-relative ms-5">
            <span id="box" className="me-3 fs-6 badge badge-danger text-white z-3 position-absolute top-50 start-50 translate-middle rounded-3">0</span>
           <i class="fa-solid fa-star text-danger fs-2 position-absolute top-0 start-0 "></i>
          
            </div>

            </Link>
        </li>
    
        <li className="ps-2 ms-5"> 
              <input className=" " type={"checkbox"}  checked={theme === 'light'} onChange={(e) => {setTheme(e.target.checked ? 'light' : 'dark')}}/>
              </li>
        
      </ul>
    </div>
  </div>
</nav>
        
    )
}


export default Navbar;






