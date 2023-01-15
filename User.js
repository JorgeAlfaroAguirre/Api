const mongoose = require('mongoose')

const Users= mongoose.model('User',{
    name: { type:String, requiere:true, minLength: 3}, 
    lastName: { type:String, requiere:true, minLength: 3}, 
})

module.exports = Users