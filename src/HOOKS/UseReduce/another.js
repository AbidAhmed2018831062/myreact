import React, { useContext } from 'react';
import { a } from '../UseReduce/Context';
function Another()
{
const {dispatch}=useContext(a);
return(
    <div>
        <button onClick={()=> dispatch('increment')}>Click to Increase</button>
    </div>
)
}

export default Another;