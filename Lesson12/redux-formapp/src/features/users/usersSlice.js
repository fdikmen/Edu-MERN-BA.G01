import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        addUsers: (state, action) => {
            //state.users = [...state.users, action.payload];
            console.log(action,"action.payload");
            state.users.push(action.payload);
        },
        getUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const {addUsers, getUsers} = usersSlice.actions;

export const selectUsers = state => state.users;


// Tekse Ekleme işlemi için kullanılır.
export const fetchUsers = (data) => (dispatch, getState) => {
    fetch('https://jsonplaceholder.typicode.com/users/'+data)
    .then(response => response.json())
    .then(json => dispatch(addUsers(json)));
  };
export default usersSlice.reducer;
