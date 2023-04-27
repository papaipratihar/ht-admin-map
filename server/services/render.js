 const axios = require("axios");

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
  if (req.body.id === "admin" && req.body.password === "admin@123") {
    axios
      .get("http://localhost:3150/adminlogin")
      .then(function (response) {
        res.render("map1", { users: response.data });
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error Occurred while loading users: ${err.message}`,
        });
      });
  } else {
    res.status(401).send({ message: "Invalid id or password" });
  }
};

exports.map1 = (req, res) => {
  axios
    .get("http://localhost:3150/adminlogin")
    .then(function (response) {
      res.render("map1", { users: response.data, restaurants: response.data });
    })
    .catch((err) => {
      res.send({
        status: "FALSE",
        message: "DATA NOT POPULATED",
        user: {},
      });
    });
};