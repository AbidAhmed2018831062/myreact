// import Bracket from "./Bracket";
// import Emoji from "./Emoji";
// import Text from "./Text";
// import Click from "./HOC/Click";
// import HoverCounter from "./HOC/HoverCounter";
import Click from './RenderProp/Click';
import ButtonClick from './RenderProp/ClickCounter';
import HoverCounter from './RenderProp/HoverCounter';
function App() {
 // const list=[1,2,3]
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
      <Click
     render={ (count,incrementChange)=> <HoverCounter count={count} incrementCount={incrementChange}/>}/>
  </div>
    )
     
}

export default App;
