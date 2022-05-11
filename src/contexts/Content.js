import Click from './Click';
import HoverCounter from './HoverCounter';
import themeContext from './themecontext';

export default function Content (){
    return (
        <>
        <Click>
     { (count,incrementChange)=> 
     <themeContext.Consumer>
         {
         ({theme})=>{ //console.log(value);
        return <HoverCounter count={count} incrementCount={incrementChange} theme={theme}/>
        }
    }
   </themeContext.Consumer>
}</Click>
        </>
    )
}