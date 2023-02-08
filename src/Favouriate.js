
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import ShowMovie from "./showMovie"


function Favouriate(){

    const Favmovie=useSelector((state)=>state.movie.Movies)
        console.log(Favmovie.length)
    const [movie,setmovie]=useState([])
    useEffect(() => {
        setmovie(Favmovie)
       },[]);
  
    return(
        <div className="container">
        <div className="row p-5"> 
        {movie.map((ele,index)=>{
         return(
             <div className="col-sm-12 col-md-6 col-lg-4 mb-3 "  key={index}>
                  <ShowMovie index={index} img={ele.movie.img} des={ele.movie.des} title={ele.movie.title} />
             </div>
         )
        })}
        </div>
 </div>

        
    )
}


export default Favouriate;