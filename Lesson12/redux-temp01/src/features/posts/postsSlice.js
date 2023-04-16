import { createSlice } from "@reduxjs/toolkit";

// The initial state of the Redux store
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' },
];

// Action-Object => { type: 'posts/postAdded', payload: { id: '3', title: 'Third Post!', content: 'Third! }

// Create a slice of the Redux store
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload;
            const existingPost = state.find((post) => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
    },
});
//Create a action-creator for each action type
export const { postAdded, postUpdated } = postsSlice.actions;

// Export the reducer function
export default postsSlice.reducer;