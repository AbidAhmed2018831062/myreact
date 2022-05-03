import React from 'react';
import ReactDOM from 'react-dom';
//React JSX element and REact rendering

//const hello=React.createElement("h1",{className:"Hey"},"I am Abid");//create element of React!!
//using JSX React will automatically make the JSX element turn into the create element of react
const element=(
  <h1 className='first react'>Hey I am Abid</h1>
);
console.log(element);

ReactDOM.render(element,document.querySelector(".root"));