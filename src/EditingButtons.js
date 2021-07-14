import React from "react"


const EditingButtons = ({ setIsEditing, saveChanges, editedTaskLength }) => {

    return (
        <div>
            <button className="submit" onClick={() => saveChanges()} disabled={editedTaskLength ? false : true}>
                <span className="material-icons material-icons-outlined">
                    done
                </span>
            </button>
            <button className="cancel" onClick={() => setIsEditing(false)}>
                <span className="material-icons material-icons-outlined">
                    clear
                </span>
            </button>
        </div>
    )
}


export default EditingButtons