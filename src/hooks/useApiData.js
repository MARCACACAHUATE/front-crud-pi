import React from "react";


function useApiData(initial_value){
    const url="http://localhost:5000/api/vale/";
        
    const [ data, setData ] = React.useState(initial_value);
    const [ loading, setLoading ] = React.useState(true);
    const [ error, setError ] = React.useState(false); 

    // Hace el llamado a la api para traer los datos
    const Get = (url) => {
        fetch(url)
        .then(function(response){
            let data_api = response.json();
            return data_api;
        }).then(function(Data){
            let data_array = []
            
            Data.data.map(row=>{
                data_array.push(row);
            });            
            
            setData(data_array);
            setLoading(false);
        });
    }
    
    React.useEffect(()=>{
        Get(url);
    });
    
    
    // Funcion para guaradr los datos en el estado
    const setSaveData = () => {
        Get(url);
    }

    return { data, setSaveData, Get };
}

export { useApiData };