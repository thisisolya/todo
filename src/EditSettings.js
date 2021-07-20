import React from 'react';


const EditSettings = ({ toggleEditingSettings }) => {

    return (
        <div className="edit-buttons-wrapper">
            <p>task editing on</p>
            <input type="checkbox" onChange={() => toggleEditingSettings()} />
            <p>task editing off</p>
        </div>
    )
}


export default EditSettings