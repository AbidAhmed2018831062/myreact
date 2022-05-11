
const HoverCounter=({count,incrementCount,theme})=>{
    const style=theme==='Dark'?{backgroundColor:'black',color:'white'}:null;
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
        </div>
    )
    }
    export default HoverCounter;