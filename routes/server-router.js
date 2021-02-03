const express = require('express');

const router = express.Router();

const serverServices = require('../services/server-service');

router.get('/servers', serverServices.getAllServersSevice);
router.get('/server/:id', serverServices.getServerByIdService);
router.post('/server', serverServices.createServerService);

module.exports = router;
