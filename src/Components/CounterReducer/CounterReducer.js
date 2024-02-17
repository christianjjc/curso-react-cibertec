import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default: {
      throw new Error();
    }
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar en 1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Reducir en 1</button>
    </div>
  );
}

export default CounterReducer;
