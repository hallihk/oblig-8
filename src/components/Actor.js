import { useEffect, useState } from "react"
import { getMoviesFromActor } from "../lib/movieService"
import { useParams } from "react-router-dom"
import MovieList from "./MovieList";

export default function Actor() {

    const { name } = useParams()
    const [movie, setMovie] = useState([]) //For å holde data fra movies
    const [loading, setLoading] = useState(false) //Hvis movies ikke er loada tekst "loading" ellers ikke vis

    //GET MOVIES
    useEffect(() => {
        const listMovies = async() => {
            setLoading(true)
            const data = await getMoviesFromActor(name)
            setLoading(false)
            setMovie(data)
    
        }
        listMovies()
    }, [name])

    console.log(movie)

    //Viser hvis contentet ikke er loada enda
    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <div>  
            <h1>Movies by</h1>
            <div>
                {movie?.map((movies) => (
                <MovieList 
                    title={movies?.title} 
                    key={movies?._id} 
                    actor={movies?.actor} />
                ))}
            </div>
        </div>
    )
}