import React from 'react';
import { useEditingToggle } from './EditContext';


const EditSettings = () => {

    const toggleSettings = useEditingToggle();

    return (
        <div className="edit-buttons-wrapper">
            <p>task editing on</p>
            <input type="checkbox" onChange={toggleSettings} />
            <p>task editing off</p>
        </div>
    )
}


export default EditSettings