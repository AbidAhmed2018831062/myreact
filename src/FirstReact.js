import React from 'react';
class Firstreact extends React.Component{

    state = { date: new Date() };
    componentDidMount()
    {
        this.nowDate=setInterval(()=>{this.changeDate()
        },1000);
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
        const {date}=this.state;
      return (
      <h1 className='first react'>
      Hey I am Abid. and now it is time: {date.toLocaleTimeString()}
    </h1>);
    }
  }
  export default Firstreact;