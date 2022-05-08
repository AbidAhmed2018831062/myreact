import React from 'react';
import Boiling from './Boiling';
import { converToCel, converToFar } from './lib/convert';
import Temp from './Temperature';
export default class Calculator extends React.Component{
state={
    temp:'',
    scale:'c'
}
handleChange=(e,scale)=>{
    console.log(e.target.value);
    this.setState({
        temp:e.target.value,
        scale
    })
}

 render()
 {
     const {temp,scale}=this.state;
     const celcius=scale==='f'? converToCel(temp): temp;
     const far=scale==='c'? converToFar(temp): temp;
     return (
         <div>
          <Temp temp={celcius} scale="c" tempHandle={this.handleChange}/>
          <Temp temp={far} scale="f" tempHandle={this.handleChange}/>
          <Boiling temp={celcius}/>
         </div>
     )
 }
}