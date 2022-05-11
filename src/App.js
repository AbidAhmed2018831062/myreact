// import Bracket from "./Bracket";
// import Emoji from "./Emoji";
// import Text from "./Text";
// import Click from "./HOC/Click";
// import HoverCounter from "./HOC/HoverCounter";
import React from 'react';
import Section from '../src/contexts/Section';
import themeContext from './contexts/themecontext';
import Click from './RenderProp/Click';
import ButtonClick from './RenderProp/ClickCounter';
class  App extends React.Component {
 // const list=[1,2,3]
 render(){
  return (
    // <Emoji>
    //  {(addEmoji)=> 
    //  <Bracket>
    // { (addBracket)=> <Text addEmoji={addEmoji} addBracket={addBracket}/>}
    //  </Bracket>
    // }
    // </Emoji>
    // );
  //   <div>
  //  <Click/>
  //  <HoverCounter/>
  //  </div>
  <div>
    <Click
     render={ (count,incrementChange)=> <ButtonClick count={count} incrementCount={incrementChange}/>}/>
    <themeContext.Provider value={{theme:"Dark"}}><Section/></themeContext.Provider>
  </div>
    )
  }
}

export default App;
