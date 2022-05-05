import React from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Logger } from 'sass';

function Createarea(props) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function submitNote(event) {

        props.onAdd(note);
        event.preventDefault();
        setNote({
            title: '',
            content: ''
        });
    }

    return (
        <div className='form'>
            <form action='/mye' method='post'>
                <input name='title' onChange={handleChange} value={note.title} placeholder='Title' />
                <textarea name='content' onChange={handleChange} value={note.content} placeholder='Take a Note...' rows={'3'} />
                <button onClick={submitNote}>Add</button>
            </form>

        </div>
    );
}
export default Createarea;