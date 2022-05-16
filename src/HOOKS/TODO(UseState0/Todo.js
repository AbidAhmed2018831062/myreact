import React from 'react';

function ToDo()
{
const [toDo,setToDo]=React.useState('');
const [warning,setWarning]=React.useState(null);

const handleChange= (e)=>{
  const change=e.target.value;
  const updateWarning=change.includes(".js")?"You need to have JavaScript skills for this":null;
  setToDo(change);
  setWarning(updateWarning);
}
return(
    <div>
        <p>{toDo}</p>
        <textarea name="text" value={toDo} onChange={handleChange}></textarea>
        <p>{warning||"Good Choice"}</p>

    </div>
)
}

export default ToDo;