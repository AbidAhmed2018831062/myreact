import ClickCounter from './ClickCounter';
const ButtonClick=({count,incrementCount})=>{
return (
    <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
)
}
export default ClickCounter(ButtonClick);