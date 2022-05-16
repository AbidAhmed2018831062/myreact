import React from "react";

export default function Counter(){
const [count,setCount]=React.useState({
    count1:0,
    title:"I am"
});

const increaseCount=()=>{
    setCount((updateCount)=> ({
        ...updateCount,
        count1:updateCount.count1+1,
        title:"I am"+updateCount.count1+1


    }));
}
const {count1}=count;
return (
    <div>
       <p>{count1}</p>
        <button onClick={increaseCount}>Increase Value</button>
    </div>
)
}