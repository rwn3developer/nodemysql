const express = require('express');

const routes = express.Router();

const admincontroller = require('../controllers/AdminController');

routes.post('/admindata',admincontroller.admindata);
routes.get('/viewdata',admincontroller.viewdata);

module.exports = routes;