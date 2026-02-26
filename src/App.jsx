import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App () {
  // Iteration 1: Lift state up from Counter
  const [count, setCount] = useState(0);

  // Iteration 3: Move increment/decrement logic up
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      {/* Iteration 2 & 3: Pass count, increment, decrement as props */}
      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {/* Iteration 4: Use reusable Exponent component */}
        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
