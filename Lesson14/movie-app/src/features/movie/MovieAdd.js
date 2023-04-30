import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { createMovie,fetchMovieById,updateMovie } from './movieSlice';
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams() //get id from url
  const selectedMovie = useSelector(state => state.movies.selectedMovie)

  //ComponentDidMount & ComponentDidUpdate
  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id))
      console.log("Incoming Data=>", selectedMovie)
    }
  }, [dispatch, id])


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
      if (id) { //if id exists, update movie
        dispatch(updateMovie({ ...newMovie, id })) //dispatch updateMovie action
      }
      else { // if id does not exist, create movie
        dispatch(createMovie(newMovie)) //dispatch createMovie action
      }
      form.reset() //clear form
      navigate('/List') // redirect to List page
    }
    else { alert("Please fill in the blanks") }


  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Movie Add</h1>
      {/* <input type="text" name='title' placeholder="Title" defaultValue={selectedMovie ? selectedMovie.title : ''}/> */}
      <input type="text" name='title' placeholder="Title" defaultValue={selectedMovie && selectedMovie.title}/>
      <input type="text" name='category' placeholder="Category" defaultValue={selectedMovie && selectedMovie.category}/>
      <input type="text" name='year' placeholder="Year" defaultValue={selectedMovie && selectedMovie.year}/>
      <input type="text" name='imdb_score' placeholder="IMDB Score" defaultValue={selectedMovie && selectedMovie.imdb_score}/>
      <input type="text" name='avatar' placeholder="Cover URL" defaultValue={selectedMovie && selectedMovie.avatar}/>
      <input type="text" name='country' placeholder="Country" defaultValue={selectedMovie && selectedMovie.country}/>
      <button type="submit">{selectedMovie && selectedMovie.id ? "Update Movie" : "Add Movie"}</button>
    </form>
  )
}
