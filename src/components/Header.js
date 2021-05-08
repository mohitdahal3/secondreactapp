import React from 'react'
import { Link } from "react-router-dom";

export default function Header(props) {

    const ifsearch = () => {
        let searchitem = (document.getElementById('ily').value).trim()
        if (searchitem === '') {

            document.getElementById('ily').style.border = '2px solid red'
            alert('Enter something inside search field')
        } else {
            document.getElementById('ily').style.border = '1px solid gray'
            props.search(searchitem)
        }
    }

    const ifcancel = () => {
        document.getElementById('ily').value = ''
        props.cancel()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <label className="navbar-brand">Notes App</label>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/secondreactapp'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                            </li>
                        </ul>
                        {props.searchbar ?
                            <form className="d-flex">
                                <input className="form-control me-2" id='ily' type="search" placeholder="Search" aria-label="Search" />
                                {(props.searching === false) ?
                                    <button className="myBtn" type="button" onClick={() => { ifsearch() }} >Search</button> :
                                    <button className="myBtn-2" type="button" onClick={() => { ifcancel() }}>Cancel</button>
                                }
                            </form>
                            : ""}
                    </div>
                </div>
            </nav>
        </div>
    )
}
