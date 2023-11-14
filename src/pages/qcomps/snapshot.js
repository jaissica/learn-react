import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => {
            n = n + 5;
            alert(n);
            return n;
          });
        }}
      >
        +5
      </button>
    </>
  );
}
