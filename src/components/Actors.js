import { useEffect, useState } from "react"
import { getActors } from "../lib/movieService"
import { Link } from 'react-router-dom'


export default function Actors() {

    const [content, setContent] = useState([]) //For å holde data fra movies
    const [loading, setLoading] = useState(false) //Hvis movies ikke er loada tekst "loading" ellers ikke vis

    //Viser contentet når alt er loaded
    useEffect(() => {
        const listActors = async() => {
            setLoading(true)
            const data = await getActors()
            setLoading(false)
            setContent(data)

        }
        listActors()
    }, [])
     console.log(content)

    //Viser hvis contentet ikke er loada enda
    if (loading) {
        return <p>Loading ...</p>
    }
    return (
        <div>
            <h1>Actorlist</h1>
            <ul>
                {content?.map((actor) => (
                <div key={actor._id}>
                    <Link to={`/actors/${actor?.name}`}>
                        <h5>{actor.fullname}</h5>
                    </Link>
                </div>
                ))}
            </ul>
        </div>
    )
}