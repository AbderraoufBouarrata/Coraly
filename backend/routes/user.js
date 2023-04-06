const express = require('express');
const router = express.Router();

const { getUsers, getUser } = require('../controllers/user');

router.route('/users').get(getUsers);
router.route('/user/:id').get(getUser);

module.exports = router;