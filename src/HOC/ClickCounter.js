import React from "react";

const old=(Original)=>{
    class NewCom extends React.Component{
        state={count:0};

        incrementCount=()=>{
            this.setState(state=>({count:state.count+1}))
        }
        render()
        {
            const {count}=this.state;
            return <Original count={count} incrementCount={this.incrementCount}/>

        }
    }
    return NewCom;
}
export default old;