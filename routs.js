const express = require('express');
const router = express.Router();
 const {getAll} = require ('./controler')

router.get('/web', getAll);

module.exports = router;
