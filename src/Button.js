// Buttons

export const Button=(props)=>{
    return(
        <button className="button" id={props.id} style={{backgroundColor:props.color,color:props.textColor}} value={props.value} onClick={props.click} >
        {props.value}
        </button>
    )
}
