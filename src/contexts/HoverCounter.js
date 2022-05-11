
const HoverCounter=({count,incrementCount,theme,changeTheme})=>{
    const style=theme==='dark'?{backgroundColor:'black',color:'white'}:{backgroundColor:'grey',color:'white'};
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Hovered {count} times</h1>
            <button onClick={changeTheme}>Change Theme Color</button>
        </div>
    )
    }
    export default HoverCounter;