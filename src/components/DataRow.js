import React from "react";
import "../style/DataRow.css";
import { Button } from "./Button";
import { DataContext } from "../context/DataContext";


function DataRow(props){

    return (
        <tr>
            <td className="row">{props.data.id}</td>
            <td className="row-folio">{props.data.folio}</td>
            <td className="row-motivo">{props.data.motivo}</td>
            <td className="row"><Button data={props.data}/></td>
        </tr>
    );
}

export { DataRow };