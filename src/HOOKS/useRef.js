import React, { useEffect } from 'react';
import Forward from './forwardRef';

function UseRef()
{
    const inputRef=React.useRef(null);

    useEffect(()=>{
     inputRef.current.focus();

    },[])


return(
    <div>
        <Forward ref={inputRef}name="abid" placeholder='Enter something'/>
    </div>
)
}

export default UseRef;