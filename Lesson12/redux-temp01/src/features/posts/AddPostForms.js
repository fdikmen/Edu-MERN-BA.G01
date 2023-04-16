import React from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'


export default function AddPostForms() {
    const dispatch = useDispatch()

    const onSavedPostClicked = () => {
    
        dispatch(
            postAdded({ id: '3',
             title: 'Third Post!', 
             content: 'Third!'
             }))
           
    }

  return (
    <div>AddPostForms
        <br/>
        <button onClick={onSavedPostClicked}>Save Post</button>
    </div>
  )
}
