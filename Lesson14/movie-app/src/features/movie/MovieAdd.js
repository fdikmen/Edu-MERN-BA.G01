import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createMovie, fetchMovieById, updateMovie, clearSelectedMovie } from './movieSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Image, Button, Form, Header } from 'semantic-ui-react'

const blankImage = "https://react.semantic-ui.com/images/wireframe/image.png"
export default function MovieAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams() //get id from url
  const selectedMovie = useSelector(state => state.movies.selectedMovie)

  const [coverImage, setCoverImage] = useState()

  //ComponentDidMount & ComponentDidUpdate 
  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id))
        .then((response) => {
          //console.log("Incoming Data=>", response)
          if (response.payload) {
            setCoverImage(response.payload.avatar)
          }
        })
    }
    else {
      setCoverImage(blankImage)
    }
    return () => {
      /*clear selectedMovie*/
      dispatch(clearSelectedMovie())
    } //ComponentWillUnmount
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
    <Grid>
      <Grid.Column width={16}>
        <Header as='h2' color='teal' textAlign='center'> Movie Add Form </Header>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={coverImage} />
      </Grid.Column>
      <Grid.Column width={12}>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Title</label>
            {/* <input type="text" name='title' placeholder="Title" defaultValue={selectedMovie ? selectedMovie.title : ''}/> */}
            <input type="text" name='title' placeholder="Title" defaultValue={selectedMovie && selectedMovie.title} />
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Category</label>
              <input type="text" name='category' placeholder="Category" defaultValue={selectedMovie && selectedMovie.category} />
            </Form.Field>
            <Form.Field>
              <label>Country</label>
              <input type="text" name='country' placeholder="Country" defaultValue={selectedMovie && selectedMovie.country} />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Year</label>
              <input type="text" name='year' placeholder="Year" defaultValue={selectedMovie && selectedMovie.year} />
            </Form.Field>
            <Form.Field>
              <label>IMDB Score</label>
              <input type="text" name='imdb_score' placeholder="IMDB Score" defaultValue={selectedMovie && selectedMovie.imdb_score} />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Cover URL</label>
            <input type="text" name='avatar' placeholder="Cover URL" onChange={(e) => setCoverImage(e.target.value)} defaultValue={selectedMovie && selectedMovie.avatar} />
          </Form.Field>
          <Button type='submit' floated='right'>{selectedMovie && selectedMovie.id ? "Update Movie" : "Add Movie"}</Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
