import React, { useContext, useState } from "react";

export const EditingContext = React.createContext();
export const ToggleEditingContext = React.createContext();

export const useEditingContext = () => {
    return useContext(EditingContext)
};

export const useEditingToggle = () => {
    return useContext(ToggleEditingContext)
};


export const EditingProvider = ({ children }) => {

    const [editingAllowed, seteEditingAllowed] = useState(true);

    const toggleEditingSettings = () => {
        seteEditingAllowed(editingAllowed => !editingAllowed)
    }

    return (
        <EditingContext.Provider value={editingAllowed}>
            <ToggleEditingContext.Provider value={toggleEditingSettings}>
                {children}
            </ToggleEditingContext.Provider>
        </EditingContext.Provider>
    )
}