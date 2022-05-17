import React from "react";

function ForwardRef({name,placeholder},inputRef){
    return(
    <textarea ref={inputRef}name="abid" placeholder='Enter something'></textarea>
    );
}

const Forward=React.forwardRef(ForwardRef);
export default Forward;