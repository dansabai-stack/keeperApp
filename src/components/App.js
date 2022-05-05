import React from 'react';
import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './Notes';
import Createarea from './Createarea';



function App() {
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }
    return (
        <div className='one'>
            <Header />

<Createarea
    onAdd={addNote}
/>

<div className='notes'>
    {notes.map(noteItem => {
        return (
            <div>
                <Note
                    title={noteItem.title}
                    content={noteItem.content}

                />
            </div>
        );
    })}
</div>

            <Footer />
        </div>
    );
}

export default App;