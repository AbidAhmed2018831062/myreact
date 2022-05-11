import Click from './Click';
import HoverCounter from './HoverCounter';
import themeContext from './themecontext';

export default function Content (){
    return (
        <>
        <Click>
     { (count,incrementChange)=> <themeContext.Consumer>{(value)=> <HoverCounter count={count} incrementCount={incrementChange}/>}</themeContext.Consumer>
}</Click>
        </>
    )
}