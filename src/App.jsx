import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

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
        {/* Iteration 2: Pass count as prop to all Exponent components */}
        <ExponentTwo num={count} />
        <ExponentThree num={count} />
        <ExponentFour num={count} />
        <ExponentFive num={count} />
        <ExponentSix num={count} />
      </div>
    </div>
  );
}

export default App;
