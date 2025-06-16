require('dotenv').config()
const express=require('express')
const cors=require('cors');

const connectDb=require('./database/db')


const app=express()


app.use(cors())
app.use(express.json())



const PORT=process.env.PORT;




app.listen(PORT,connectDb(),()=>console.log(`Running at port ${PORT}`))