import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const [valueInput, setValueInput] = useState("jorge");

  const add = () => {
    setCount(count + 1);
    // count = count + 1;
    console.log(count);
  };

  const onChangeInput = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>Using hooks (useState)</h1>
      <h3>{count}</h3>
      <button onClick={add}>Adicionar</button>
      <div>
        <input onChange={onChangeInput} />
      </div>
      <h3>{valueInput}</h3>
    </div>
  );
}
