
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import MovieCard from "./MovieCard";


function ShowMore(){

    const [showMovie, setShowMovie] = useState({})
    const params = useParams()
    const Cid = params.id
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${Cid}`, {
            params: {
                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
        })
        .then((movie) => setShowMovie(movie.data))
        .catch((err) => console.log(err))
    },[])


    return(
        <div>
            <MovieCard img={showMovie.poster_path} des={showMovie.overview} title={showMovie.title}/>
        </div>
    )
}

export default ShowMore;
