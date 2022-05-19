import React from 'react';

function ToDo()
{
const [toDo,setToDo]=React.useState('');
const [warning,setWarning]=React.useState(null);

const handleChange= (e)=>{
  const change=e.target.value;
  setToDo(change);
}
return(
    <div>
    </div>
)
}

export default ToDo;