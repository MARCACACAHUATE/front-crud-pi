import React from "react";
import ReactDOM from "react-dom";
import "../style/ModalEdit.css";


function ModalEdit({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById("editar")
    )
}

export { ModalEdit };