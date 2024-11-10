const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

app.use(cors())
app.use(bodyparser());

const connect = async ()=>{
    try {
        let connection =await mongoose.connect('mongodb+srv://subinkh2719:tSNiOrJhANZluFtD@cluster0.18pmj.mongodb.net/')
        
        // console.log(connection);
    } catch (error) {
        console.log('====================================');
        console.log('====================================');
    }
}

connect()
const loginschema = mongoose.Schema({
    email : String,
    password : String
})
const userSchema = mongoose.Schema({
    name : String,
    address : String,
})
const loginModal = mongoose.model('loginCollection',loginschema)
const userModal = mongoose.model('userCollection',userSchema)

app.get('/', (req,res) => {
    res.send('hello')
})
app.post('/user',async(req,res) => {
    console.log(req.body);
   const ress = await loginModal.create({
        email : req.body.email,
        password : req.body.password
    })
    const res1 = await userModal.create({
        name : req.body.username,
        address : req.body.address
    })
    // console.log(ress)
    // console.log(res1)
    
})
app.get('/user',async(req,res) => {
    const userdata = await userModal.find()
    const resdata = await loginModal.find()
    res.json({userdata, resdata})
})


app.listen(port, ()=>{
    console.log("running")
})