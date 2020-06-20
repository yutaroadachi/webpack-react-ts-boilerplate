import React, { useState } from "react";

export const Counter = () => {
  const [count, setCounter] = useState<number>(0);
  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);
  const reset = () => setCounter(0);

  return (
    <>
      <p>{count}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" onClick={increment}>
          +1
        </button>
        <button type="button" onClick={decrement}>
          -1
        </button>
        <button type="button" onClick={reset}>
          リセット
        </button>
      </div>
    </>
  );
};
