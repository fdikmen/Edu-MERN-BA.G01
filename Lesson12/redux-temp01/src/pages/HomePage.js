import React from 'react'
import Header from '../components/Header'
import AddPostForms from '../features/posts/AddPostForms'
import PostsList from '../features/posts/PostsList'

export default function HomePage() {
  return (
    <>
    <Header/>
    <p>Home Page</p>
    <hr/>
    <AddPostForms/>
    <hr/>
    <PostsList/>
    </>
  )
}
