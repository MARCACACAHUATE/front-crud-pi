import React from "react";
import { DataContext } from "../context/DataContext";


function CreateForm(){

    const { addItem } = React.useContext(DataContext);
    
    const onSubmit = (event) => {
        event.preventDefault();
        addItem();
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>Folio</label>
            <input placeholder="No. Folio" id="Folio"/>
            <label>Motivo</label>
            <input placeholder="motivo" id="Motivo"/>
            <button type="submit">Guardar</button>
        </form>
    );
}

export { CreateForm };