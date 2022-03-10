import React from "react";
import { DataContext } from "../context/DataContext";

function FormModal(){

    const { setOpenModal, rowData, editItem } = React.useContext(DataContext);
    const [ rowEdit, setRowEdit ] = React.useState({id: rowData.id,
                                                    motivo: rowData.motivo != null ? rowData.motivo : " ",
                                                    saldo: rowData.saldo === null ? 0 : rowData.saldo,
                                                    monto: rowData.saldo === null ? 0 : rowData.monto
                                                });


    const onSubmit = (event) => {
        event.preventDefault();

        editItem(rowEdit);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        const target = event.target
        let data = {
            id: rowData.id,
            motivo: event.target.name === "motivo" ? target.value : rowEdit.motivo,
            saldo: parseFloat(event.target.name === "saldo" ? target.value : rowEdit.saldo),
            monto: parseFloat(event.target.name === "monto" ? target.value : rowEdit.monto)
        }

        setRowEdit(data);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Monto</label>
            <input type="number" placeholder="Monto" onChange={onChange} name="monto" value={rowEdit.monto}/>
            <label>Saldo</label>
            <input type="number" placeholder="Saldo" onChange={onChange} name="saldo" value={rowEdit.saldo}/>
            <label>Motivo</label>
            <input type="text" placeholder="Motivo" onChange={onChange} name="motivo" value={rowEdit.motivo}/>

            <button type="submit">Guardar Cambios</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
}

export { FormModal };