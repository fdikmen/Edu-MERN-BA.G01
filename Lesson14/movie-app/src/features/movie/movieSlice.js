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

// ASYNC THUNK TO CREATE MOVIE
// axios.post(url, data)
export const createMovie = createAsyncThunk(
    'movies/createMovie',
    async (newMovie) => {
        const response = await API.post('/movies', newMovie)
        return response.data
    }
)

const initialState = {
    movies: [],
    status: 'idle',
    error: null
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {        
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

    }
});

export const { } = movieSlice.actions

export default movieSlice.reducer