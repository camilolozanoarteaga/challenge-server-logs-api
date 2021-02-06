const express = require('express');

const router = express.Router();

const serverServices = require('../services/server-service');

router.get('/servers', serverServices.getAllServersSevice);
router.get('/logs', serverServices.getLogsService);
router.get('/server/:id/logs', serverServices.getServerByIdService);

// TODO: SE DEBE CREAR API QUE RETORNA LAS ESTADISTICAS MENSUALES

module.exports = router;
