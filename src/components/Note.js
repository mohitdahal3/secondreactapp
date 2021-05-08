import React from 'react'

export default function Note(props){
    return (
        <div>
            <h4>{props.note.title}</h4>
            <p>{props.note.desc}</p>
            <button className="delbtn" onClick = {()=>{props.ondel(props.note)}}>Delete note</button>
            <hr />
        </div>
    )
}
