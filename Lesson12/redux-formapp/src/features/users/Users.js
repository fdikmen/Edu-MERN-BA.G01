import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectUsers, fetchUsers } from './usersSlice'

export default function Users() {
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    console.log("users=>",users);
  return (
    <div>Users
        <ul>
            {users.users && users.users.map((user,index) => (
                <li key={index}>{index+1}.{user.name}</li>
            ))}
        </ul>
        <button onClick={() => dispatch(fetchUsers(1))}>Get User</button>
    </div>
  )
}
