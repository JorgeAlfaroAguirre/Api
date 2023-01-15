const express = require('express')
const user = require('./user.controller')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.use(express.json())

const urlAtlas = 'mongodb+srv://Jorge:asdf123@cluster0.4rdywfd.mongodb.net?retryWrites=true&w=majority'
mongoose.connect(urlAtlas)

app.get('/users',user.list)
app.post('/users',user.create)
app.get('/users/:id',user.get)
app.put('/users/:id',user.update)
app.patch('/users/:id',user.update)
app.delete('/users/:id',user.delete)

app.use(express.static('app'))
app.get('/', (req,res)=>{
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req,res)=>{
    res.status(404).send('Esta página no existe')
})

//No tiene sentido con post
/* app.post('*', (req,res)=>{
    res.status(404).send('Esta página no existe')
})
 */
app.listen(port, ()=>{
    console.log('Arrancando la aplicación >>>')
})