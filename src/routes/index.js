const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Hola mundo');
});  //definir una ruta inical

module.exports = router;
