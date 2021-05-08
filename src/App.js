import React, { useState, useEffect } from 'react';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import './App.css'
import About from './components/About.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {


  


  if (localStorage.getItem('notes') === '[]') {
    localStorage.clear();
  }


  let init
  if (localStorage.getItem('notes') === null) {
    init = []
  } else {
    init = JSON.parse(localStorage.getItem('notes'))
  }

  const [notes, setnotes] = useState(init)
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  
  const [searchednote, setsearchednote] = useState(notes)

  const addnotes = function (title, desc) {
    let x
    x = (notes.length === 0) ? 1 : notes[notes.length - 1].sno + 1
    let obj = {
      sno: x,
      title: title,
      desc: desc
    }
    setnotes([...notes, obj])


  }

  const ondel = function (note) {
    setnotes(notes.filter((element) => {
      return element !== note
    }));
    setsearchednote(searchednote.filter((element) => {
      return element !== note
    }));
  }



  const [searching, setsearching] = useState(false)
  const [searchcancel, setsearchcancel] = useState(true)

  const searched = function(str){
    console.log('searched!');
    setsearching(true)
    setsearchcancel(false)


    setsearchednote(notes.filter((note)=>{
      let notestr = note.title + note.desc
      return notestr.includes(str)
    }))


  }
  
  const cancelled = function(){
    console.log('cancelled!');
    setsearchcancel(true)
    setsearching(false)
  }

  return (
    <div>

      <Router>

        <Switch>
          <Route exact path="/about">
            <Header searchbar={false} />
            <About />
          </Route>
          <Route exact path="/">
            <Header searchbar={true} search = {searched} cancel = {cancelled} searching = {searching} searchcancel={searchcancel}/>
            <Main notes={notes} ondel={ondel} onadd={addnotes} searching = {searching} snotes = {searchednote}/>
          </Route>
          <Route exact path="/secondreactapp">
            <Header searchbar={true} search = {searched}  cancel = {cancelled} searching = {searching} searchcancel={searchcancel}/>
            <Main notes={notes} ondel={ondel} onadd={addnotes} searching = {searching} snotes = {searchednote}/>
          </Route>
          <Route exact path="/index.html">
            <Header searchbar={true} search = {searched}  cancel = {cancelled} searching = {searching} searchcancel={searchcancel}/>
            <Main notes={notes} ondel={ondel} onadd={addnotes} searching = {searching} snotes = {searchednote}/>
          </Route>
          
        </Switch>

      </Router>
      <Footer />
    </div>
  )
}
