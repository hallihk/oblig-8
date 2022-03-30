import client from "./client";

const movieField = `
_id,
title,
"actor": actor->{fullname, "name": name.current}
`
export async function getMovies() {
  const data = await client.fetch(`*[_type == "movie"]{${movieField}}`)
  return data
}

const actorField = `
_id,
fullname,
"name": name.current
`

export async function getActors() {
  const data = await client.fetch(`*[_type == "actor"]{${actorField}}`)
  return data
}

const movies = `
_id,
title,
"actor": actor->{fullname, "name": name.current}
`
export async function getMoviesFromActor(actor) {
  const data = await client.fetch(
    `*[_type == "movie" && actor->name.current==$actor]{${movies}}`,
    { actor }
  )
  return data
}
