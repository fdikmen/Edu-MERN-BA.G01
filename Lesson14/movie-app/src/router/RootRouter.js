import React from 'react'

import { Routes, Route } from 'react-router-dom'
import MovieAdd from '../features/movie/MovieAdd'
import MovieList from '../features/movie/MovieList'
export default function RootRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/Add" element={<MovieAdd/>} />
                <Route path="/List" element={<MovieList/>} />
                <Route path="/Edit/:id" element={<MovieAdd/>} />
            </Routes>
        </>
    )
}
