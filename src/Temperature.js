export default function Temp({temp,scale,tempHandle})
{
    return (
        <fieldset>
            <legend>Enter temperature in {scale==='c'?"Celcius":"Farhenheit"}</legend>
            <input type="text" value={temp} onChange={(e)=>tempHandle(e,scale)}></input>
             </fieldset>
    )
}