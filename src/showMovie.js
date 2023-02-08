import { useDispatch, useSelector } from "react-redux";
import { removingfromFav } from "./Store/Actions/FavouriteActions";



function ShowMovie(props){
    const dispatch=useDispatch()
    const Count=useSelector((state)=>state.movie.Movies)

    const RemovingfromFavourites=(index)=>{
        dispatch(removingfromFav(index))
        console.log(Count.length)


    }
    return(

    <div className="container bg-dark text-center" >
        <div className="row">
        <div className="mb-3" >
            <img style={{height : "50vh" }}src={`https://image.tmdb.org/t/p/w500/${props.img}`} className="img-fluid rounded-start pt-3"/>
            </div>
                <div  className="text-white">
                    <h5  className="card-title fw-bold ">{props.title}</h5>
                </div>
            </div>
            <div className="text-danger fs-1 d-flex justify-content-end py-4 me-3 " role="button" onClick={()=>RemovingfromFavourites(props.index)}>
            <i class="fa-solid fa-trash-can"></i>
            </div>
    </div>
    )
}


export default ShowMovie;
