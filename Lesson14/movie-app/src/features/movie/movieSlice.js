//Created by "rxslice" snippet
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../config/axiosConfig'

// ASYNC THUNK TO FETCH MOVIES
// axios.get(url)
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await API.get('/movies')
        return response.data
    }
)

// ASYNC THUNK TO FETCH MOVIE BY ID
// axios.get(url/:id)
export const fetchMovieById = createAsyncThunk(
    'movies/fetchMovieById',
    async (id) => {
        const response = await API.get('/movies/' + id)
        return response.data
    }
)

// ASYNC THUNK TO CREATE MOVIE
// axios.post(url, data)
export const createMovie = createAsyncThunk(
    'movies/createMovie',
    async (newMovie) => {
        const response = await API.post('/movies', newMovie)
        return response.data
    }
)

// ASYNC THUNK TO DELETE MOVIE
// axios.delete(url/:id)
export const deleteMovie = createAsyncThunk(
    'movies/deleteMovie',
    async (id) => {
        //const response = await API.delete('/movies/'+id)
        const response = await API.delete(`/movies/${id}`)
        return response.data
    }
)

// ASYNC THUNK TO UPDATE MOVIE
// axios.put(url/:id, data)
export const updateMovie = createAsyncThunk(
    'movies/updateMovie',
    async (updatedMovie) => {
        const response = await API.put('/movies/' + updatedMovie.id, updatedMovie)
        return response.data
    }
)

const initialState = {
    movies: [],
    selectedMovie: {},
    status: 'idle',
    error: null
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // REDUCER TO CLEAR SELECTED-MOVIE
        clearSelectedMovie: (state) => {
            state.selectedMovie = null
        },
    },
    extraReducers: (builder) => {
        builder
            // FETCH MOVIES
            .addCase(fetchMovies.pending, (state, action) => {  //loading
                // console.log(action)
                state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state, action) => { //success
                state.status = 'succeeded'
                state.movies = action.payload
            })
            .addCase(fetchMovies.rejected, (state, action) => { //error
                state.status = 'failed'
                state.error = action.error.message
                // console.log(action.error)
            })
            // CREATE MOVIE
            .addCase(createMovie.pending, (state, action) => {  //loading
                state.status = 'loading'
            })
            .addCase(createMovie.fulfilled, (state, action) => { //success
                state.status = 'succeeded'
                state.movies.push(action.payload)
            })
            .addCase(createMovie.rejected, (state, action) => { //error
                state.status = 'failed'
                state.error = action.error.message
            })
            // DELETE MOVIE
            .addCase(deleteMovie.pending, (state, action) => {  //loading
                state.status = 'loading'
            })
            .addCase(deleteMovie.fulfilled, (state, action) => { //success
                state.status = 'succeeded'
                /*const index = state.movies.findIndex(movie => movie.id === action.payload.id)
                state.movies.splice(index, 1)*/
                // OR
                state.movies = state.movies.filter(movie => movie.id !== action.payload.id)
            })
            .addCase(deleteMovie.rejected, (state, action) => { //error
                state.status = 'failed'
                state.error = action.error.message
            })
            // UPDATE MOVIE
            .addCase(updateMovie.pending, (state, action) => {  //loading
                state.status = 'loading'
            })
            .addCase(updateMovie.fulfilled, (state, action) => { //success
                state.status = 'succeeded'
                const index = state.movies.findIndex(movie => movie.id === action.payload.id)
                state.movies[index] = action.payload

            })
            .addCase(updateMovie.rejected, (state, action) => { //error
                state.status = 'failed'
                state.error = action.error.message
            })
            // FETCH MOVIE BY ID
            .addCase(fetchMovieById.pending, (state, action) => {  //loading
                state.status = 'loading'
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => { //success
                state.status = 'succeeded'
                state.selectedMovie = action.payload
            })
            .addCase(fetchMovieById.rejected, (state, action) => { //error
                state.status = 'failed'
                state.error = action.error.message
            })

    }
});

export const {clearSelectedMovie } = movieSlice.actions

export default movieSlice.reducer