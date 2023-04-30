import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, deleteMovie } from './movieSlice'
import { Link } from 'react-router-dom'
import CardComp from '../../components/CardComp'
import { Card } from 'semantic-ui-react'

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
        <Card.Group itemsPerRow={3}>
          {movies.map((movie, index) => (
            <CardComp 
            movieId={movie.id}
            key={movie.id} 
            orderNumber={index + 1} 
            title={movie.title} 
            category={movie.category} 
            createdAt={movie.createdAt}
            handleDelete={handleDelete}
            />
          ))}
        </Card.Group>
      </div>
    </div>
  )
}

/*
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
            <Link to={'/Edit/' + movie.id}>Edit</Link>
*/
