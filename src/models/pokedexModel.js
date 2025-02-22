const mongoose = require('mongoose')

const pokedexSchema = mongoose.Schema({

    _id: { 
        type: mongoose.Schema.Types.ObjectId, 
        default: mongoose.Types.ObjectId
    }, 

    name: {
        type: String,
        required: true,
    },

    type: {
        type: [String],
        required: true
    },

    abilities: {
        type: [String],
        required: true
    },

    description: String,

    coach: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'coach' //quando se faz referencia a alguma collection precisa ser o mesmo nome
        // referencia a coachModel : const Model = mongoose.model('coach', coachSchema)
    }

}, { timestamps: true })


const Model = mongoose.model('pokedex', pokedexSchema)

module.exports = Model