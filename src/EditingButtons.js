import React from "react"


const EditingButtons = ({ discardChanges, saveChanges, editedTaskLength }) => {

    const initializeSaveChanges = (e) => {
        e.preventDefault();
        saveChanges();
    }

    const initializeDiscardChanges = () => {
        discardChanges();
    }

    return (
        <div>
            <button type="submit" className="submit" onClick={initializeSaveChanges} disabled={editedTaskLength ? false : true}>
                <span className="material-icons material-icons-outlined">
                    done
                </span>
            </button>
            <button className="cancel" onClick={initializeDiscardChanges}>
                <span className="material-icons material-icons-outlined">
                    clear
                </span>
            </button>
        </div>
    )
}


export default EditingButtons