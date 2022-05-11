import { useContext } from 'react';
import Click from './Click';
import HoverCounter from './HoverCounter';
import themeContext from './themecontext';

export default function Content (){
    const context=useContext(themeContext);//for class Classname.contextType=themecontext should be used
    const {theme,changeTheme}=context;
  //  console.log(changeTheme);
    return (
        <>
        <Click>
     { (count,incrementChange)=>  <HoverCounter count={count} incrementCount={incrementChange} theme={theme} changeTheme={changeTheme}/>
}</Click>
        </>
    )
}