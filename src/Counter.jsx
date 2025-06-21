import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    return (<div>
    <button onClick={()=>setCount(count+1)}>
        Click me
    </button> <button onClick={()=>setCount(0)}>
        Reset
    </button>
    <p>You clicked {count} times
    </p>

    </div>);
}