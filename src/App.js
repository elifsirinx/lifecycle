import { useState, useEffect } from "react";
import Counter from "./components/Counter";

/**
 * ---useEffect KULLANIMI
 * Bu hook u kullanarak yaşam döngümüzdeki eventleri yakalayabiliriz.
 * Component üzerinde herhangi bir ifade güncellendiği zaman useEffect ifadesi ile yakalayabiliriz.
 *
 * ---componentDidMount KULLANIMI
 * Component mount olduğu anı yakalayabilmemizi sağlayan bir fonksiyondur.
 *
 * Note: useEffect ve useState kullanımlarında bunlar hiçbir zaman if yapısının içinde olmamalıdır.
 * Property nin tepesinde bulunmalı ve herhangi bir kontrole tabii olmamalıdır.
 *
 * Mount  : Component doğum anı
 * UnMount: Component ölüm anı
 *
 */

function App() {
  // const [number, setNumber] = useState(0);
  // const [name, setName] = useState("Elif");

  // //Herhangi bir state güncellendiğinde çalışır.
  // // useEffect(() => {
  // //   console.log("State güncellendi.");
  // // });

  // useEffect(() => {
  //   console.log("Number veya name state güncellendi.");
  // }, [number, name]);

  // useEffect(() => {
  //   console.log("Number state güncellendi.");
  // }, [number]);

  // useEffect(() => {
  //   console.log("Name state güncellendi.");
  // }, [name]);

  // useEffect(() => {
  //   console.log("Component mount edildi.");
  // }, []); //Dependency array

  const [isVisible, setIsVisible] = useState(true);

  return (
    // <div className="App">
    //   <h1>{number}</h1>
    //   <button onClick={() => setNumber(number + 1)}>Click</button>

    //   <hr />

    //   <h1>{name}</h1>
    //   <button onClick={() => setName("Sirin")}>Click</button>
    // </div>

    <div className="App">
      {isVisible && <Counter />}
      <br />
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
