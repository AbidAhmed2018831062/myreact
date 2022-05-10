export default function Text({addEmoji, addBracket})
{
    let text="Hey It is Abid";
    if(addEmoji)
    text=addEmoji(text,':smile');
    if(addBracket)
    text=addBracket(text);

    return (
        <div>
            {text}
        </div>
    )



}