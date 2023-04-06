const express = require('express');
const router = express.Router();

const { getProcesses, getProcess } = require('../controllers/process');

router.route('/processes').get(getProcesses);
router.route('/processes/:id').get(getProcess);

module.exports = router;