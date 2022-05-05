import React from 'react';

function Note(noteItem) {
    return (
        <div>
            <div className='note'>
                <h1>
                    {noteItem.title}
                </h1>
                <p>
                    {noteItem.content}
                </p>
            </div>
        </div>
    );
}
export default Note;