import { useReducer } from "react";

const initState={
    counter1:0,
    counter2:0,
};
const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return {
                ...state,
                counter1:state.counter1+action.value,

            }
        case 'decrement':
            return {
                ...state,
                counter1:state.counter1-action.value,

            }
            case "increment2":
                return {
                    ...state,
                    counter2:state.counter2+action.value,
    
                }
            case 'decrement2':
                return {
                    ...state,
                    counter2:state.counter2-action.value,
    
                }
    


        default:
            return state;
    }
}
export default function ComCounter(){
    const [count,despatch]=useReducer(reducer,initState);

    return (
        <div>
            <p>Counter-{count.counter1}</p>
            <button type="button" onClick={()=> despatch({type:'increment',value:5})}>Increment</button>
            <button  type="button" onClick={()=> despatch({type:'decrement',value:5})}>Decrement</button>
            <hr></hr>
            <p>Counter-{count.counter2}</p>
            <button type="button" onClick={()=> despatch({type:'increment2',value:1})}>Increment</button>
            <button  type="button" onClick={()=> despatch({type:'decrement2',value:1})}>Decrement</button>
        </div>
    )
}