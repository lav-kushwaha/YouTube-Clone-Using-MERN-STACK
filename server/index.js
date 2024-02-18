import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './routes/user.js'

dotenv.config()

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use(bodyParser.json());
app.use('/user',userRoutes)
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server Running on the ${PORT}`);
})

const DB_URL = process.env.CONNECTION_URL

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("MongoDb database connected..")
}).catch((error)=>{
    console.log(error)
})
