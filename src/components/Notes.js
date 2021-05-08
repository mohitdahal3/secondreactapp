import React from 'react'
import Note from './Note.js'

export default function Notes(props){
    return (
        <div>
            <h3 style={{textAlign: "center"}}>Your notes here</h3>
            <div className = "container">
            {props.searching===false ? 
            
            props.notes.length === 0? "No notes to display":
            props.notes.map(
                (note)=>{
                    return (<Note key = {note.sno} note={note} ondel = {props.ondel}/>)
                }
            )
        
        :
        props.snotes.length===0? "No notes found":
        props.snotes.map(
            (note)=>{
                return (<Note key = {note.sno} note={note} ondel = {props.ondel}/>)
            }
        )
        }
            </div>
        </div>
    )
}
