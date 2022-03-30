import { useEffect, useState } from "react"
import { getMovies } from "../lib/movieService"
import Movie from "./Movie"


export default function Movies() {

    const [content, setContent] = useState([]) //For å holde data fra movies
    const [loading, setLoading] = useState(false) //Hvis movies ikke er loada tekst "loading" ellers ikke vis

    //Viser contentet når alt er loaded
    useEffect(() => {
        const listMovies = async() => {
            setLoading(true)
            const data = await getMovies()
            setLoading(false)
            setContent(data)

        }
        listMovies()
    }, [])
     console.log(content)

    //Viser hvis contentet ikke er loada enda
    if (loading) {
        return <p>Loading ...</p>
    }
    return (
        <div>
            <h1>Movielist</h1>
            <ul>
                {content?.map((movie) => (
                <Movie title={movie.title} actor={movie.actor} key={movie.title} />
                ))}
            </ul>
        </div>
    )
}