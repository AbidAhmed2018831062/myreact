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
    handleClick=(locale)=>{
      console.log(locale);
      this.setState({
        locale,
      })

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
      /*  let button;
        if(locale==="bn-BD")
       button= <Button change={this.handleClick} locale='en-US'/>
        else
        button= <Button change={this.handleClick} locale='bn-BD'/>*/


      return (
        <>
      <h1 className='first react'>
      Hey I am Abid. and now it is time: {date.toLocaleTimeString(locale)}
    </h1>
  {locale==='bn-BD' ? <Button change={this.handleClick} locale='en-US' show enable/> : <Button change={this.handleClick} locale='bn-BD' enable/>}
    </>);
    }
  }
  export default Firstreact;