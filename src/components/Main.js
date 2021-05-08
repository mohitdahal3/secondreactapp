import React from 'react'
import Notes from './Notes.js'
import Addnotes from './Addnotes.js'

export default function Main(props){
    return (
        <div>
            {(props.searching===false)?
            <Addnotes onadd = {props.onadd}/>:''
}
            <Notes notes = {props.notes} ondel = {props.ondel} searching = {props.searching} snotes = {props.snotes}/>
        </div>
    )
}
