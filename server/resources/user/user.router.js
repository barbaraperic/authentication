const express = require('express');
const user = require('./user.controllers')

const router = express.Router();

router.post('/', user)

module.exports = router