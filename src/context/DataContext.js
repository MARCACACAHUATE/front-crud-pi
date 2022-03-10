import React from "react";
import { Get } from "../services/ApiServices";
import { useApiData } from "../hooks/useApiData";

const DataContext = React.createContext();


function DataProvider(props){
    let url="http://localhost:5000/api/vale/";
    
    const { data, setSaveData, Get } = useApiData([]);
    const [ openModal, setOpenModal ] = React.useState(false);
    const [ rowData, setRowData ] = React.useState({});
     
    // Metodo POST
    const addItem = () => {
        // Crea el json
        const data_enviada = {
            folio: document.getElementById("Folio").value,
            motivo: document.getElementById("Motivo").value
        }

        // hace un post para crea un registro nuevo
        fetch(url, {
           method: "POST",
           body: JSON.stringify(data_enviada),
            headers: {
                'Accept':"application/json",
                "Content-Type":"application/json"
            }
        }).then(function(response){
           if(response.ok){
               return response.text();
            }else{
                alert("Error al ejecutar solicitud");
            }
        });

        // Genera el nuevo estado con el nuevo registro 
        setSaveData();
    }

    // Método DELETE
    const deleteItem = (id) => {

        fetch(url + id, {method: "DELETE"})
        .then(function(response){
            if(response.ok){
                return response.text();
            }else{
                alert("Error al ejecutar solicitud");
            }
        });

        setSaveData();
    }

    // Método PUT
    const editItem = (row_edit) => {

        console.log(row_edit);
        
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(row_edit),
             headers: {
                 'Accept':"application/json",
                 "Content-Type":"application/json"
             }
        }).then(function(response){
            if(response.ok){
                return response.text();
            }else{
                alert("Error al ejecutar solicitud");
            }
        });

        setSaveData();
    }
    

    return (
        <DataContext.Provider value={{
            data,
            addItem,
            deleteItem,
            openModal,
            setOpenModal,
            rowData,
            setRowData,
            editItem
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider };