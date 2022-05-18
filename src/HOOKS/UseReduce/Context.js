import React, { useReducer } from 'react';
import Another1 from './another1';
const a=React.createContext();
export { a };
const initState=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}
function Context()
{
const [count,dispatch]=useReducer(reducer,initState);


return(
    <div>
        <p>Counter-{count}</p>
        <a.Provider value={{dispatch}}>
            <Another1/>
        </a.Provider>
    </div>
)
}

export default Context;