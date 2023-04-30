import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, deleteMovie } from './movieSlice'
import { Link } from 'react-router-dom'

export default function MovieList() {
  //useSelector subscribes to the Redux store (states)
  const movies = useSelector(state => state.movies.movies)
  const status = useSelector(state => state.movies.status)
  const error = useSelector(state => state.movies.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  },
    [dispatch] //componentDidMount + componentDidUpdate
  )

  const handleDelete = (id) => {
    dispatch(deleteMovie(id))
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        {movies.map((movie, index) => (
          <p key={movie.id}>
            {index + 1}. <b>{movie.title}</b> {movie.category} {movie.createdAt}
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            <Link to={'/Edit/'+movie.id}>Edit</Link>
          </p>
        ))}
      </div>
    </div>
  )
}
