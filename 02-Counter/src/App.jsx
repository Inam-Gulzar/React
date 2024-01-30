import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let increase = () => {
    if (count < 20) {
      count = count + 1;
      setCount(count);
    }
  };
  let decrease = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  };
  return (
    <>
      <div>
        <h2>Counter Value</h2>
        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <br />
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}

export default App;
