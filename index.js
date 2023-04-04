import express from 'express';
import cors from 'cors';

const PORT = 3000;

import { addMovie, getAllMovies } from './src/MovieLibrary.js';

const app = express();
app.use(cors());
app.use(express.json());


app.get('/movies', getAllMovies);
app.post('/movies', addMovie);


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));


