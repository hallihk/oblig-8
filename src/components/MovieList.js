export default function MovieList( {title, actor} ) {
    return (
        <div>
            <h2>{actor?.fullname}</h2>
            <h5>Movies:</h5>
            <p>{title}</p>
        </div>
    )
}