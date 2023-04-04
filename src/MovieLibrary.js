import { db } from "./dbConnect.js";


// POST add movie
export function addMovie (req, res) {
  const newMovie = req.body

  db.collection('Movies').add(newMovie)
    .then(doc => res.status(201).send(`Movie added: ${doc.id}`))
    .catch(error => res.status(500).send(err));

}

// GET get all movies
export async function getAllMovies (req, res) {
  const collection = await db.collection('Movies').get()
    .catch(error => res.status(500).send(error));

  const movieList = collection.docs.map(movie => ({...movie.data(), id: movie.id}));
  res.status(201).send(movieList);

}

