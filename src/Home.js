import axios from "axios";
import { useEffect, useState } from "react";
import MainCard from "./MainCard";

function Home(){

    // ===================== Fetch Main Data ===================== //

    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
        .then((data) => setMovies(data.data.results))
        .catch((err) => console.log(err))
    },[]) 

    // ========================== search ===============================

const [keyword, setKeyword] = useState("m")
useEffect(() => {
  axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key :"9b743af1d4fde1d65af33c40dcccce87",
          query : keyword
      }
  })
  .then((data) => setMovies(data.data.results))
  .catch((err) => console.log(err))
}, [keyword])

const filterProduct=(e) => {
  setKeyword(e.target.value)
}

// ========================= Pagination ==============================

const [Pagination, setPagination] = useState("1")
useEffect(() => {
  axios.get("https://api.themoviedb.org/3/movie/popular", {
      params: {
        api_key :"9b743af1d4fde1d65af33c40dcccce87",
        page : Pagination
      }
  })
  .then((data) => setMovies(data.data.results))
  .catch((err) => console.log(err))
}, [Pagination])

const PaginationProduct=(e) => {
  setPagination(e.target.text)
}

// ##################################################################################################  

    return(
    <div className="container-fluid bg-dark">
        <div className="row pb-5 gy-5">
{/* =============================== search ============================== */}
    <div className="">
        <input onChange={(e) => filterProduct(e)}  className="form-control mt-5 w-50 m-auto" type="search" placeholder="Search"  />
    </div>
{/* // ===================== Fetch Main Data (MainCard) ===================== // */}

                {movies.map((movie) => {
        return    <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                    <MainCard img={movie.poster_path} des={movie.overview} title={movie.title} id={movie.id}/>
                </div>   
                })}

{/* ========================== Pagination =================================== */}

    <nav className="m-auto text-center mt-5 " >
        <ul className="pagination pagination-lg d-flex justify-content-center">
            <li className="page-item active" aria-current="page">
                <span className="page-link" onClick={(e) => PaginationProduct(e)}>1</span>
            </li>
            <li className="page-item"><a className="page-link" href="#" onClick={(e) => PaginationProduct(e)}>2</a></li>
            <li className="page-item"><a className="page-link" href="#" onClick={(e) => PaginationProduct(e)}>3</a></li>
        </ul>
    </nav>
    </div>
    </div>
    
    )
}

export default Home;