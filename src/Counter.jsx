import { useState } from "react";
export default function Counter(){
    const [count, setCount] = useState(0);
    const [celciusKm, setCelciusKm] = useState("");
    const [megabyte, setMegabyte] = useState("");
    const [centimeter, setCentimeter] = useState("");

    return (
      <div style={{ textAlign: "center" }}>
        <input
          value={celciusKm}
          onChange={e => setCelciusKm(e.target.value)}
        /> Celcius/Km
        <p>{celciusKm} Celcius to {celciusKm * 9 / 5 + 32} Farenheit</p>
        <p>{celciusKm} Kilometer to {celciusKm / 1.6} Farenheit</p>

        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <p>You clicked {count} times</p>

        <input
          value={megabyte}
          onChange={e => setMegabyte(e.target.value)}
        /> Megabyte
        <p>
          {megabyte} Megabyte(MB) is equivalent to <h2>{megabyte / 1000}</h2> Gigabyte(GB)
        </p>

        <input
          value={centimeter}
          onChange={e => setCentimeter(e.target.value)}
        /> Centimeter
        <p>
          ({centimeter}) Centimeter is equivalent to <h2>{centimeter / 2.54}</h2> Inches
        </p>
      </div>
    );
}