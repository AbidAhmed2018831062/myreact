import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps,nextState)
    {
        const {change:current}=this.props.change;
        const {change:next}=nextProps.change;
        if(current===next)
        {
            return false;
        }
        else
        return true;
    }
render(){
    console.log("Button");
    const {locale}=this.props.locale;
    return (
        <button type="button" onClick={()=> this.props.change(locale)}>Click Here</button>
    );
}
}

export default Button;