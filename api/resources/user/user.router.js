const express = require('express');
const me = require('./user.controllers')

const router = express.Router();

router.get('/', me)

module.exports = router