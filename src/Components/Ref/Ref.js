import React, { useRef } from 'react';

function Ref() {
  const inputRef = useRef(); //utilizar elementos del DOM

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Ref</h1>
      <input ref={inputRef} />
      <button onClick={enfocarInput}>Enfocar Input</button>
    </div>
  );
}

export default Ref;
