const { log } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const postcontroller = require('./controllers/post_control')
const app = express()
app.use(express.json())
mongoose.connect('mongodb+srv://utsav123:mongodb@cluster0.yctsegm.mongodb.net/')
.then(()=> console.log("Connection Done"))
.catch(err => console.error("Could not connect to mongodb" , err))


app.use(postcontroller)
const port = process.env.port || 3000;
// app.get("/" , (req , res) =>{
//     res.send("Hello Github Codespaces")
// })

app.listen(port , ()=>{
    console.log(`Server is Running on ${port}`);
})