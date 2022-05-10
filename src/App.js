import Bracket from "./Bracket";
import Emoji from "./Emoji";
import Text from "./Text";
function App() {
 // const list=[1,2,3]
  return (
    <Emoji>
     {(addEmoji)=> 
     <Bracket>
    { (addBracket)=> <Text addEmoji={addEmoji} addBracket={addBracket}/>}
     </Bracket>
    }
    </Emoji>
    );
     
}

export default App;
