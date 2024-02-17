/* import React, { useCallback, useState } from 'react';

function BotonIncrementar({ increment }) {
  return (
    <>
      <button onClick={increment}>Incrementar</button>
    </>
  );
}

function CounterCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Counter useCallback</h1>
      <p>Contador: {count}</p>
      <BotonIncrementar increment={increment} />
    </div>
  );
}

export default CounterCallback;
 */

import React, { useState, useCallback } from 'react';

function BotonIncrement({ increment }) {
  return <button onClick={increment}>Incrementar</button>;
}

function CounterCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <div>
      <h2>Counter con useCallback</h2>

      <p>Contador: {count}</p>

      <BotonIncrement increment={increment} />
    </div>
  );
}

export default CounterCallback;
