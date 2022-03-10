import React from "react";
import { DataContext } from "../context/DataContext";

function TitleCounter(){
    const { data } = React.useContext(DataContext);
    return (
        <h1>Inventario de Vales - Total {data.length}</h1>
    );
}

export { TitleCounter };