import React from 'react';
import Button from './Button';
class Firstreact extends React.Component{

    state = { date: new Date(),
    locale:"bn-BD" };
    componentDidMount()
    {
        this.nowDate=setInterval(()=>{this.changeDate()
        },1000);
    }
    handleClick=()=>{
      const {locale}=this.state;
      if(locale==="bn-BD"){
      this.setState({
        locale:"en-US",
      })
    }
    else
    {
      this.setState({
        locale:"bn-BD",
      })
    }

    }
    componentWillUnmount()
    {
     clearInterval(this.nowDate);
    }
    changeDate()
    {
        this.setState({date:new Date()})
    }
   
    render()
    {
        const {date,locale}=this.state;
  
      return (
        <div>
      <h1 className='first react'>
      Hey I am Abid. and now it is time: {date.toLocaleTimeString(locale)}
    </h1>
   <Button change={this.handleClick} locale='en-US'/>
    </div>);
    }
  }
  export default Firstreact;