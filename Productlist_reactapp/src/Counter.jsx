import { useState } from "react";

function Counter() {
  let [count, increment] = useState(0);
  console.log(count);

  let incre = () => {
    increment((curr) => {
      console.log(curr + 1);
      return curr + 1;
    });
    increment((curr) => {
      console.log(curr + 1);
      return curr + 1;
    });
    increment((curr) => {
      console.log(curr + 1);
      return curr + 1;
    });
  };
  let decre = () => {
    if (count >= 1) {
      increment(count - 1);
    }
  };
  return (
    <>
      <button onClick={incre}>+</button>
      {count}
      <button onClick={decre}>-</button>
    </>
  );
}
export default Counter;
