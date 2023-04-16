import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Verileri almak için useSelector, verileri değiştirmek için (aciton tetiklemek) useDispatch kullanılır.
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
// Action fonksiyonları import edilir.
import styles from './Counter.module.css';

export function Counter() {
  // Mevcut state değerini almak için useSelector kullanılır.
  const count = useSelector(selectCount);
  // Action tetiklemek için useDispatch kullanılır.
  const dispatch = useDispatch();

  // HOOKS KULLANIMI
  const [incrementAmount, setIncrementAmount] = useState('2');

  // Aşağıdaki kod ile incrementAmount değeri Number tipine dönüştürülür.
  // Eğer Number tipine dönüştürülemezse 0 değeri atanır.
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
