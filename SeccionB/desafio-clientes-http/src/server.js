import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

const arrayUsers = [
    {nombre:"Gianluca",edad:25},
    {nombre:"Valentina",edad:25},
    {nombre:"Maximiliano",edad:20}
]

app.get("/users",(req,res)=>{
    res.status(200).json({users:arrayUsers})
});