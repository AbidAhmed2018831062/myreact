import React, { useEffect, useReducer } from 'react';
const firstState={
    loading:true,
    post:{},
    error:''
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'SUCESS':
            return{
                loading:false,
                post:action.data,
                error:false

            }

        case 'FAIL':
            return{
                loading:false,
                post:{},
                error:"There was a problem"

            }

        default:
            return state;
    }

}
function ToDo()
{
const [post1,dispatch]=useReducer(reducer,firstState);

useEffect(()=>{
    fetch('https://jsonplaceholder.typcode.com/posts/1')
    .then(response => {console.log(response);
         return response.json()})
    .then(data => {
        dispatch({type:"SUCESS",data})
        console.log(data);
    }).catch((err)=>{
        dispatch({type:"FAIL"})
    })
},[])

return(
    <div>
        <p>{post1.loading?"Loading...":post1.post.title}</p>
        <p>{post1.error||null}</p>
    </div>
)
}

export default ToDo;