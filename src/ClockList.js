import Firstreact from "./FirstReact";

 export default function ClockList ({list=[]})
 {
     return (
         <>
         {list.map((key)=> <Firstreact key={key}/>)}
         </>
     )
 }