 import React from "react";
 
 function Button({counter, changeCount}){
     console.log("I was called"+counter)
    return (
    <button onClick={changeCount}>Click to add {counter} </button>
    )
}

export default React.memo(Button);
