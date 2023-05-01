const axios = require("axios");
 const Joi = require("joi");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3150/adminlogin")
    .then(function (response) {
      res.render("adminlogin");
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error Occurred while loading home page: ${err.message}`,
      });
    });
};

exports.adminform = (req, res) => {
  res.render("adminlogin");
};


exports.adminlogin = (req, res) => {
  const schema = Joi.object({
    id: Joi.string().required().valid("admin"),
    password: Joi.string().required().valid("admin@123"),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(401).send({ message: "Invalid id or password" });
    return;
  }

  axios
    .get("http://localhost:3150/adminlogin")
    .then(function (response) {
      res.render("map", { users: response.data });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error Occurred while loading users: ${err.message}`,
      });
    });
};

exports.map = (req, res) => {
  axios
    .get("http://localhost:3150/adminlogin")
    .then(function (response) {
      res.render("map", { users: response.data, restaurants: response.data });
    })
    .catch((err) => {
      res.send({
        status: "FALSE",
        message: "DATA NOT POPULATED",
        user: {},
      });
    });
};