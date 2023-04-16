import React from 'react'
import { useSelector } from 'react-redux'

export default function PostsList() {
    const posts = useSelector(state => state.posts)
  return (
    <div>PostsList
        <ul>
            {posts.map((post,index) => (
                <li key={index}>
                    {index+1}.{post.title} {post.content}
                </li>
            ))}
        </ul>
    </div>
  )
}
