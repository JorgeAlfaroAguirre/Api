const mongoose = require('mongoose')

const urlAtlas = 'mongodb+srv://Jorge:asdf123@cluster0.4rdywfd.mongodb.net?retryWrites=true&w=majority'

mongoose.connect(urlAtlas)

const User = mongoose.model('User',{
    username: String,
    edad: Number,
})

const crear = async(nombre, edad)=>{
    const user = new User({username:nombre, edad:edad})
    const saveUser = await user.save()
    console.log(saveUser)
}

//crear('Eliminar', 0) //crea una entrada en la base de datos.

const buscarTodo = async()=>{
    const users = await User.find()
    console.log(users)
}

//buscarTodo() //muestra todos los usuarios en un arreglo

const buscar = async(nombre)=>{
    const user = await User.find({username:nombre})
    console.log(user)
}

//buscar('Felipe')
//buscar('Daniel')

const buscarUno = async(nombre) =>{
    const user = await User.findOne({username:nombre})
    console.log(user)
}

//buscarUno('Daniel')
//buscarUno('No')

const actualizar = async(nombre) =>{
    const user = await User.findOne({username:nombre})
    console.log(user)
    user.edad = 30
    await user.save()
    console.log(user)
}

//actualizar('Daniel')

const eliminar = async(nombre) =>{
    const user = await User.findOne({username:nombre})
    console.log(user)
    if (user){
        await user.remove()
    }
    //console.log(user)
}

//crear('Eliminar', 0)

eliminar('Eliminar')
