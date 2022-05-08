export function converToCel(temp)
{
    if(isNaN(temp))
    return 0;
    return (temp-32)*5/9;
}
export function converToFar(temp)
{ if(isNaN(temp))
    return 0;
    return (temp*9/5)+32;
}
