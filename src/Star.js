
import { useDispatch, useSelector } from "react-redux"
import { changeFavourite } from "./Store/Actions/FavouriteActions"



function Star(){
    const myFav = useSelector((state) => state.Fav.favorite)
    const dispatch = useDispatch()
    
    const chang = (e) => {
        dispatch(changeFavourite(myFav == "fa-regular fa-star fs-1 me-2 text-danger" ? "fa-solid fa-star fs-1 me-2 text-danger"  : "fa-regular fa-star fs-1 me-2 text-danger" ))
        e.target.className=myFav
    }

    return(
    <>
      <i className="fa-regular fa-star fs-1 me-2 text-danger" onClick={(e) => chang(e)} ></i>
    </>
)
}






export default Star;
