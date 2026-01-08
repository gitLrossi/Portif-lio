const Postagem = require('../models/postagemModels')


const CriarPostagem = async (req, res) => {
    try{
        const { titulo, descricao, dataI, dataF, linkFT, linkPJ} = req.body;
    
        const postagem = new Postagem ({
        titulo, 
        descricao, 
        dataI, 
        dataF, 
        linkFT, 
        linkPJ
    });

    const resultado = await postagem.save();

    res.status(201).json({
      success: true,
      message: "Postagem realizada com sucesso!",
      data: resultado,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
    };



module.exports = {
    CriarPostagem
};