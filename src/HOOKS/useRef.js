import React, { useEffect } from 'react';

function UseRef()
{
    const inputRef=React.useRef(null);

    useEffect(()=>{
     inputRef.current.focus();

    },[])


return(
    <div>
        <textarea ref={inputRef}name="abid" placeholder='Enter something'></textarea>
    </div>
)
}

export default UseRef;