import { combineReducers } from "redux";
import AddtoFav from "./favourites";
import FavoriteReducer from "./Redusers";




export default combineReducers({
   Fav: FavoriteReducer,
   movie: AddtoFav,
})