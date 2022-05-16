import React, { useCallback } from "react";
import Button from "./button";

function Calling(){
    const [count1,setCount1]=React.useState(0);
    const [count2,setCount2]=React.useState(0);
     const incrementByOne=useCallback(()=>{
         setCount1((prevState)=>prevState+1);
     },[]);
     const incrementByFive=useCallback(()=>{
        setCount2((prevState)=>prevState+5);
    },[]);

    

    return(
        <div>
            <h1>HI I am Abid The Bahubali</h1>
            <p> Counter 1's value is {count1}</p>
            <Button counter='1' changeCount={incrementByOne}/>
            <hr></hr>
            <p> Counter 2's value is {count2}</p>
            <Button counter='5' changeCount={incrementByFive}/>

        </div>
    )


}

export default Calling;