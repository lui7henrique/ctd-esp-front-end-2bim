import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  const { count, component: Component } = useCounter();

  return (
    <div>
      <Component />

      <img
        src={`https://rickandmortyapi.com/api/character/avatar/${count}.jpeg`}
        alt=""
      />
    </div>
  );
};
