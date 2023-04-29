//Created by "rxslice" snippet
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../config/axiosConfig'

// ASYNC THUNK TO FETCH MOVIES
export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
        const response = await API.get('/movies')
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
    reducers: {},
    extraReducers: (builder) => {

        builder
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

    }
});

export const { } = movieSlice.actions

export default movieSlice.reducer