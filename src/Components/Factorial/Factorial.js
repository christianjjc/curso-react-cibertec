import React, { useState, useMemo } from 'react';

function FactorialFn({ n }) {
  const factorial = useMemo(() => {
    let result = 1;
    if (n > 5) return;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }, [n]);

  return (
    <p>
      {n}! = {factorial}
    </p>
  );
}

function Factorial() {
  const [number, setNumber] = useState(5);

  return (
    <div>
      <h1>Factorial</h1>
      <input value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <FactorialFn n={number} />
    </div>
  );
}

export default Factorial;
