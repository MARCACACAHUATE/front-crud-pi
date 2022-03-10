import React from "react";
import "../style/Button.css";
import { DataContext } from "../context/DataContext";

function Button(props){
    const { deleteItem, openModal, setOpenModal, rowData, setRowData } = React.useContext(DataContext);

    const onEliminar = () => {
        deleteItem(props.data.id);
    }

    const onEditar = () => {
        if(!openModal){
            setOpenModal(true);
        }else{
            setOpenModal(false);
        }
        setRowData(props.data);
    }


    return (
        <div className="botones">
            <button onClick={onEliminar}>Eliminar</button>
            <button onClick={onEditar}>Editar</button>
        </div>
    );
}

export { Button };