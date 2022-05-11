import React from 'react';

export default class Emoji extends React.Component{
state={count:0};

incrementChange=()=>{
    this.setState((state)=>({count:state.count+1}));
}
render()
{
    const {children}=this.props;

return children(this.state.count,this.incrementChange);

    }
 }