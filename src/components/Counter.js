import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Component mount edildi.");

    //Number değerini her saniye bir arttırır.
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 3000);

    return () => clearInterval(interval); //console.log("Component unmount edildi.");
  }, []); //Dependency array

  useEffect(() => {
    console.log("Number state güncellendi.");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default Counter;
