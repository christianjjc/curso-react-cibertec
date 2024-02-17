import React, { useEffect, useState } from 'react';

function More() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const handleOnClick = () => {
    increment();
  };

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>More</h1>
      <p>Contador: {count}</p>
      <button onClick={() => handleOnClick()}>Incrementar el Contador + 1</button>
    </div>
  );
}

export default More;
