import { useState } from "react";
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
function App() {
    const [count, setCount] = useState(0)
    return (
    <div className="App">
      <Counter count={count}/>
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
