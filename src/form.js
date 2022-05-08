import React from "react";

export default class Form extends React.Component{
state={
    title:"React",
    des:"Hey Write Something",
    fav:"React",
    what:true
}
    handleChange=(e)=>{
       // console.log(e.target.checked);
        //e.preventDefault();
        if(e.target.type!=="checkbox"){
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    else
    {
        this.setState({
            [e.target.name]:e.target.checked
        })  
    }
    }
    submit=(e)=>{
        e.preventDefault();
        const {title,des,fav,what}=this.state;
        console.log(title,des,fav,what);
    }

    render()
{
    const {title,des,fav,what}=this.state;
    return(
        <div>
            <form onSubmit={this.submit}>
                <input type="text" name="title" value={title} onChange={this.handleChange}/>
                <br>
                </br>
                <br>
                </br>
                <textarea name="des" value={des} onChange={this.handleChange}/>
                <br>
                </br>
                <br>
                </br>
                <select name="fav" value={fav} onChange={this.handleChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
                <br>
                </br>
                <br>
                </br>
                <input type="checkbox" name="what" checked={what} onChange={this.handleChange}/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
}