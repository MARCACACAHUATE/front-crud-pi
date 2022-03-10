import React from "react";
import { DataRow } from "./DataRow";
import { DataContext } from "../context/DataContext";
import { ModalEdit } from "./ModalEdit";

function DataTable(){
    const { data, openModal } = React.useContext(DataContext);
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Folio</th>
                    <th>Motivo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map(row => (
                    <DataRow
                        key={row.id}
                        data={row}
                    />
                    ))}
            </tbody>
        </table>
    );
}

export { DataTable };