const express = require('express');
const router = express.Router();
const {
    CriarPostagem
} = require ('../controllers/postagemController');

router.post ('/', CriarPostagem);