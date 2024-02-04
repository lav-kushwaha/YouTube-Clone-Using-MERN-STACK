import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
dotenv.config()

app.get('/',(req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server Running on the ${PORT}`);

})

const DB_URL = process.env.CONNECTION_URL

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("MongoDb database connected")
}).catch((error)=>{
    console.log(error)
})
