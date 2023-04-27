const express = require('express');
const route = express.Router();
const services = require('../services/render');
const { application } = require('express');

route.get("/", services.homeRoutes);
route.post("/", services.homeRoutes);

// route.get("/map", services.map);
// route.post("/map", services.map);

route.get("/map1", services.map1);
route.post("/map1", services.map1);

// route.get("/welcome", services.welcome);
// route.post("/welcome", services.welcome);

route.get("/adminlogin", services.adminform);
route.post("/adminlogin", services.adminform);


module.exports = route;