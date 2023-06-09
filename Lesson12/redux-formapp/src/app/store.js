import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';

//STORE OLUŞTURMAK İÇİN KULLANILIR.
//ConfigureStore; size reducer konfigurasyon etmek için kullanılır.
//İçerisine reducer'lar alır.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
