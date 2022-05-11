class Context{
    constructor(value=null)
    {
        this.value=value;
    }
    Provider=({children,value})=>{
        console.log("Provider"+this.value.theme)
        this.value=value;
        return children;

    }
    Consumer=({children})=> {
      //  console.log(this.value.theme);
       // console.log(children)
        return  children(this.value);
    }
}

function createContext(value=null)
{
    const context=new Context(value);
    return ({
        Provider:context.Provider,
        Consumer:context.Consumer
    })
}
export default createContext;