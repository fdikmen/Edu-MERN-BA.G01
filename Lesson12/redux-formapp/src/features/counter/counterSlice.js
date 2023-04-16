import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// Temel Counter-State ataması yapılır.
const initialState = {
  value: 0, //counter değeri // sayaç başlangıç değeri
  status: 'idle', //counter durumu
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// Reducer yapsını oluşturulur.
export const counterSlice = createSlice({
  name: 'counter', // Slice ismi - Type olarak kullanılır.
  initialState, // Temel State ataması yapılır. (YUKARIDA)
  reducers: { //Reducer fonksiyonları tanımlanır.
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers`
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      }) // LOADING DURUMU
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      }) // SUCCESS DURUMU
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'idle';
        // HATA YAKALAMA
      }); // HATA DURUMU
  },
});

// Action fonksiyonları tanımlanır.
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Selector tanımlanır. // State'den değer almak için kullanılır.
export const selectCount = (state) => state.counter.value;

// Tekse Ekleme işlemi için kullanılır.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

// Reducer export edilir.
export default counterSlice.reducer;
