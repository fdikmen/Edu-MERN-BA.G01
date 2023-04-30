import React from 'react'
import { useDispatch } from 'react-redux';
import { createMovie } from './movieSlice';
import { useNavigate } from 'react-router-dom';

export default function MovieAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault() //prevent page refresh
    const form = e.target;
    const formData = new FormData(form); //form data object
    const newMovie = {
      title: formData.get('title'),
      category: formData.get('category'),
      year: formData.get('year'),
      imdb_score: formData.get('imdb_score'),
      avatar: formData.get('avatar'),
      country: formData.get('country'),
      createdAt: new Date().toISOString()
    } //new movie object
    console.log("newMovie=>", newMovie)
    if (newMovie.title && newMovie.avatar) {
      dispatch(createMovie(newMovie)) // dispatch createMovie action
      form.reset() //clear form
      navigate('/List') // redirect to List page
    }
    else { alert("Please fill in the blanks") }


  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Movie Add</h1>
      <input type="text" name='title' placeholder="Title" />
      <input type="text" name='category' placeholder="Category" />
      <input type="text" name='year' placeholder="Year" />
      <input type="text" name='imdb_score' placeholder="IMDB Score" />
      <input type="text" name='avatar' placeholder="Cover URL" />
      <input type="text" name='country' placeholder="Country" />
      <button type="submit">Add Movie</button>
    </form>
  )
}
