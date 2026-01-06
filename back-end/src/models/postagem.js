const mongoose = require('mongoose');

const postagemSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, 'Dê um titulo a essa postagem']
    },
    descricao:{
        type: String,
        required: [true, 'Descreva essa postagem, desenvolva sobre a mesma']
    },
    dataI:{
        tipe: Date,
        require: [true, 'Informe quando você comecou este projeto']
    },
    dataF:{
        tipe: Date,
        require: [true, 'Informe quando você terminou este projeto']
    },
    link:{
        tipe: String,
        require: [true]
    }
})

module.exports = mongoose.model('postagem', postagemSchema);