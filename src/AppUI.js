import React from "react";
import { TitleCounter } from "./components/TitleCounter";
import { CreateForm } from "./components/CreateForm";
import { DataTable } from "./components/DataTable";
import { DataRow } from "./components/DataRow";
import { DataContext } from "./context/DataContext";
import { ModalEdit } from "./components/ModalEdit";
import { FormModal } from "./components/FormModal";

function AppUI(){
    const { openModal } = React.useContext(DataContext);

    return (
        <React.Fragment>
            <TitleCounter></TitleCounter>
            <h2>Crear un nuevo vale</h2>
            <CreateForm/>
            <br/>
            <br/>
            {openModal && (
                <ModalEdit>
                    <FormModal/>
                </ModalEdit>
            )}
            <DataTable>
            </DataTable>
        </React.Fragment>
    );
}

//<DataRow/>
export { AppUI };