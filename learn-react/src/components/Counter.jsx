// 일반적으로 사용
import {useState} from "react";

export default function Counter({ onTotal }) {

  const [counter, setCounter] = useState(0);

  console.log('[랜더링] Counter : ', counter);

  const handleCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log('[함수호출] Counter : ', counter);

    if (onTotal) {
      onTotal();
    }
  }

  return (
    <button onClick={handleCounter}>Counter: {counter}</button>
  )

}
