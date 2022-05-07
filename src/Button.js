import React from "react";

class Button extends React.Component{
  /*  shouldComponentUpdate(nextProps,nextState)
    {
        const {change:current}=this.props.change;
        const {change:next}=nextProps.change;
        if(current===next)
        {
            return false;
        }
        else
        return true;
    }*/
render(){
    console.log("Button");
    const {locale,enable}=this.props;
    if(!enable)
    return null;
    return (
      <>  <button type="button" onClick={()=> this.props.change(locale)}>
            {locale==='bn-BD'? 'Change to bn-BD':'Change to en-UK'}
        </button>
        {this.props.show &&<p>Hello</p>}</>
    );
}
}

export default Button;