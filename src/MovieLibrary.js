import { db } from "./dbConnect.js";


// POST add movie
export const addMovie = async (req, res) => {
  const newMovie = req.body;
  const result = await db.collection('Movies').add(newMovie)
    .catch(error => console.log(error));

  
  res.status(201).send("Movie id: " + result.id);
}

export const getAllMovies = async (req, res) => {
  const collection = await db.collection('Movies').get()
    .catch(error => res.status(500).send(error))

    const movieList = collection.docs.map(movie => ({...movie.data(), id: movie.id}))
    res.status(200).send(movieList);
}





