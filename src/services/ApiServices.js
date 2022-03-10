var url="http://localhost:5000/api/vale/";

function Guardar(){
    
    console.log(document.getElementById("Id").value);
    if(document.getElementById("Id").value){
        Edit();
    }else{
        Post();
    }
}

function Post(){
    console.log(document.getElementById("Folio").value);
    fetch(url, {
       method: "POST",
       body: JSON.stringify({
           folio: document.getElementById("Folio").value
           //Edad: document.getElementById("Edad").value
        }),
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
    }).then(function(Data){
       console.log(Data);
       Get();
       document.getElementById("Id").value="";
       document.getElementById("Folio").value="";
       document.getElementById("Motivo").value="";
    });
}

function Delete(id){
    console.log(id);

}

function OpenEdit(id, motivo){
    console.log(motivo);
    document.getElementById("Id").value=id;
    document.getElementById("Motivo").value = motivo;
}

function Edit(){
    fetch(url, {
       method: "PUT",
       body: JSON.stringify({
           id: document.getElementById("Id").value,
           motivo: document.getElementById("Motivo").value,
        }),
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
   }).then(function(Data){
       console.log(Data);
       Get();
       document.getElementById("Id").value="";
       document.getElementById("Folio").value="";
       document.getElementById("Motivo").value="";
   })
}


function Get(){
    let datos = []
    fetch(url).then(function(response){
        let data = response.json();
        return data;
    }).then(function(Data){
        let data_array = []

        Data.data.map(row=>{
            data_array.push(row);
        });
        
        return data_array;
    });
    return datos;
}

export { Get };