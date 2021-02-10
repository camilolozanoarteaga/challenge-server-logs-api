const express = require('express');

const router = express.Router();

const serverServices = require('../services/server-service');

router.get('/servers', serverServices.getAllServersSevice);
router.get('/servers/:id/logs', serverServices.getServerByIdService);
router.get('/logs', serverServices.getLogsService);

// TODO: SE DEBE CREAR API QUE RETORNA LAS ESTADISTICAS MENSUALES

module.exports = router;
