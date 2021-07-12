import React from "react"


const EditingButtons = ({ passiveTask, discardChanges, saveChanges, taskEdition }) => {

    const initializeSaveChanges = () => {
        saveChanges()
        passiveTask()
    }

    const initializeDiscardChanges = () => {
        discardChanges()
        passiveTask()
    }

    return (
        <div>
            <button className="submit" onClick={initializeSaveChanges}>
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