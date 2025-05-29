// 일반적으로 사용
import {useState} from "react";

export default function Counter({ onTotal }) {

  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(counter + 1);
    if (onTotal) {
      onTotal();
    }
  }

  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )

}
