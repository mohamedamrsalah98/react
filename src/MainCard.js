import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Star from "./Star";
import { addingtofavourite, AddtoFavourite } from "./Store/Actions/FavouriteActions";

function MainCard(props){
    const dispatch=useDispatch()
   const add=(e)=>{
    if (e.target.className=="fa-regular fa-star fs-1 me-2 text-danger"){
        dispatch(addingtofavourite(props))
        e.target.className="fa-solid fa-star fs-1 me-2 text-danger"
    }else{
        // e.target.className="fa-regular fa-star fs-1 me-2 text-danger"
    }

   }

    return(

        <div className="mx-5 my-5">
            <div className="card m-auto mt-5 overflow-hidden border border-3" style={{height : "61vh"}}>
                <img style={{height : "40vh"}} src={`https://image.tmdb.org/t/p/w500/${props.img}`} className="img-fluid card-img-top"/>
                <div className="card-body ">
                    <h5 className="card-title overflow-hidden mb-3 fw-bold" style={{height : "2.5vh"}}>{props.title}</h5>
                    <p className="card-text  overflow-hidden" style={{height : "7.7vh"}}>{props.des}</p>
                    <div className="d-flex justify-content-between">
                    <Link to={`/showmore/${props.id}`} className="btn btn-secondary">Show more</Link>
                    <i className="fa-regular fa-star fs-1 me-2 text-danger"onClick={(e) => add(e)}  ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard;