import { useEffect, useState } from "react";

export default function Useeffect(){
    const [count,setCount]=useState(0);
    const [da,setDate]=useState(new Date());
const updateCount=()=>{
   setCount((prevCount)=> prevCount+1);
}

useEffect(()=>{
    const interVal=setInterval(tick,1000);

    return ()=>{
        clearInterval(interVal);
    }
});

const tick=()=>{
    setDate(new Date());
}


useEffect(()=>{
document.title=`Clicked ${count} times`
},[count]);//telling the use effect to render only when the count changes

    return(
        <div>
            <p>Time:{da.toLocaleTimeString()}</p>
            <button onClick={updateCount}>Click</button>
        </div>
    )

    

}