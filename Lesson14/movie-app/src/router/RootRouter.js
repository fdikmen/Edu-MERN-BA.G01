import React from 'react'

import { Routes, Route } from 'react-router-dom'
import MovieAdd from '../features/movie/MovieAdd'
import MovieList from '../features/movie/MovieList'
import { Message } from 'semantic-ui-react'
export default function RootRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={
                     <Message info>
                     <Message.Header>
                        Welcome to Movie App
                     </Message.Header>
                     <p>Did you know it's been a while?</p>
                   </Message>
                } />
                <Route path="/Add" element={<MovieAdd/>} />
                <Route path="/List" element={<MovieList/>} />
                <Route path="/Edit/:id" element={<MovieAdd/>} />
            </Routes>
        </>
    )
}
