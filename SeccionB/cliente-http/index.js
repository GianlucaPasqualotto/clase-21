import http from "http";
import https from "https";

// console.log(https);

// https://jsonplaceholder.typicode.com/users
const URL = "jsonplaceholder.typicode.com";

// Opciones de la solicitud
const options = {
    hostname:URL,
    port:443,
    path:"/users",
    method:"GET"
};

// Crear la solicitud HTTP
const req = https.request(options,(res)=>{
    let datos = "";
    res.on("data",(chunk)=>{
        datos+=chunk;
    });

    res.on("end",()=>{
        const response = JSON.parse(datos);
        console.log(response)
    })
});

req.on("error",(error)=>console.log(error))

req.end();