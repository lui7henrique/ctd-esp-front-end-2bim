import { Counter } from "./modules/Counter";
import { HOC } from "./modules/HOC";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      <HOC />
      <Counter />
    </div>
  );
}

export default App;
