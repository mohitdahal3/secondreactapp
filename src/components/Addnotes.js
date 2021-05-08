import React from 'react'

export default function Addnotes(props) {

    const Addnotes = () => {
        let title = document.getElementById('floatingInput').value
        let description = document.getElementById('floatingPassword').value
        if (title.trim() === '' || description.trim() === '') {
            alert('khali na choda na kunai pani')
        } else {
            props.onadd(title.trim(), description.trim())
            document.getElementById('floatingInput').value = ''
            document.getElementById('floatingPassword').value = ''
        }
    }
    return (
        <div className='container my-4'>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Add notes</h5>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="title han" />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="note han vaneko" />
                        <label htmlFor="floatingPassword">Note</label>
                    </div>
                    <button className='btn btn-primary' style={{ marginTop: '6px' }} onClick={() => { Addnotes() }}>Add</button>
                </div>
            </div>
        </div>
    )
}
