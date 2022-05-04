//React JSX element and REact rendering
import React from 'react';
//const hello=React.createElement("h1",{className:"Hey"},"I am Abid");//create element of React!!
//using JSX React will automatically make the JSX element turn into the create element of react


  
  //attributes of the react elements cannot be changed after intializing once only the data can be changed
  const element=(
    <h1 className='first react'>
      Hey I am Element and now it is time: {new Date().toLocaleString()}
    </h1>
  );
  console.log(element);

  //components

  function ReactComponent({locale})//name has to start with a uppercase letter react sends the parameter as an object 
  {
    return (
    <h1 className='first react'>
      Hey I am Abid and now it is time: {new Date().toLocaleTimeString(locale)}
    </h1>);
  }
  //render can be called only once

  //class component
  class Firstreact extends React.Component{
    render()
    {
      return (<h1 className='first react'>
      Hey I am Abid. {this.props.children}and now it is time: {new Date().toLocaleTimeString(this.props.locale)}
    </h1>);
    }
  }
  //let fr=new Firstreact();