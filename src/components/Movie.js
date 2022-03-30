import { Link } from "react-router-dom";

export default function Movie( {title, actor} ) {
    return (
        <div>
            <h3>{title}</h3>
            <Link to={`/actors/${actor?.name}`}>
                <p>{actor.fullname}</p>
            </Link>
        </div>
    )
}