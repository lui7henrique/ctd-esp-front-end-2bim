import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, [count]);

  const clear = useCallback(() => {
    setCount(0);
  }, []);

  const component = () => {
    return (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <p>count: {count}</p>

        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
        <button onClick={clear}>clear</button>
      </div>
    );
  };

  return { component, count, increment, decrement, clear };
};
