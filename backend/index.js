const express=require("express");
const cors = require('cors');
const { connection } = require("./config/db");
const { productRoutes } = require("./routes/productsRoutes");
require('dotenv').config()


const app=express();
app.use(express.json());
app.use(cors());

app.use('/products',productRoutes)

app.get("/",async(req,res)=>{
    res.send("hello world")
})

const PORT=process.env.PORT || 8000
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("DB is connected, server is running on port ",PORT)
    }catch(err){
        console.log("err",err.message)
    }
})