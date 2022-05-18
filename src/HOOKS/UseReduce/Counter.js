import { useReducer } from "react";

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
export default function UseReduce(){
    const [count,despatch]=useReducer(reducer,initState);

    return (
        <div>
            <p>Counter-{count}</p>
            <button type="button" onClick={()=> despatch('increment')}>Increment</button>
            <button  type="button" onClick={()=> despatch('decrement')}>Decrement</button>
        </div>
    )
}