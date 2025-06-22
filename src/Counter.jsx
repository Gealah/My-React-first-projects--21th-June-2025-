import { useState } from "react";
export default function Counter(){
    const [count, setCount] = useState(0);
    const [celciusKm, setCelciusKm] = useState("");
    const [megabyte, setMegabyte] = useState("");
    const [centimeter, setCentimeter] = useState("");

    // Helper to check and log errors
    function handleNumberInput(setter, value, label) {
      if (value === "" || !isNaN(value)) {
        setter(value);
      } else {
        console.error(`${label} input error: "${value}" is not a number`);
      }
    }

    return (
      <div style={{ textAlign: "center" }}>
        <input
          value={celciusKm}
          onChange={e => handleNumberInput(setCelciusKm, e.target.value, "Celcius/Km")}
        /> Celcius/Km
        <p>{celciusKm} Celcius to {celciusKm * 9 / 5 + 32} Farenheit</p>
        <p>{celciusKm} Kilometer to {celciusKm / 1.6} Farenheit</p>

        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <p>You clicked {count} times</p>

        <input
          value={megabyte}
          onChange={e => handleNumberInput(setMegabyte, e.target.value, "Megabyte")}
        /> Megabyte
        <p>
          {megabyte} Megabyte(MB) is equivalent to <h2>{megabyte / 1000}</h2> Gigabyte(GB)
        </p>

        <input
          value={centimeter}
          onChange={e => handleNumberInput(setCentimeter, e.target.value, "Centimeter")}
        /> Centimeter
        <p>
          ({centimeter}) Centimeter is equivalent to <h2>{centimeter / 2.54}</h2> Inches
        </p>
      </div>
    );
}