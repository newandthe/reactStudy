import Counter from "./Counter.jsx";
import {useState} from "react";

export default function Main() {

  const [total, setTotal] = useState(0);

  const handleTotal = () => {
    setTotal(total + 1);
  }

  return (
    <main>
      <h2>totalCounter: {total} </h2>
      <Counter onTotal={handleTotal}/>
      <hr/>
      <Counter onTotal={handleTotal}/>
      <hr/>
      <Counter />
    </main>
  )
}