// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
//

// // Routes
// // =============================================================

//   var burger = require("../models/burgers.js");
// var db = require("../models");

// // // Routes
// // // =============================================================
// module.exports = function(app) {

//   // Get all chirps
//   app.get("/api/burgers", function(req, res) {

    
//     db.burger.findAll({}).then(function(dbburgeryummy_db) {
//       // results are available to us inside the .then
//       res.json(dbburgeryummy_db);
//     });

//   });

  
//   app.post("/api/burgers", function(req, res) {
//     db.burger.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(dbburgeryummy_db) {
//       // We have access to the new todo as an argument inside of the callback function
//       res.json(dbburgeryummy_db);
//     });
//   });

//   app.delete("/api/burgers/:id", function(req, res) {
//     // We just have to specify which todo we want to destroy with "where"
//     db.burger.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbburgeryummy_db) {
//       res.json(dbburgeryummy_db);
//     });

//   });

//   // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/burgers", function(req, res) {
//     // Update takes in an object describing the properties we want to update, and
//     // we use where to describe which objects we want to update
//     db.burger.update({
//       text: req.body.text,
//       complete: req.body.complete
//     }, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbburgeryummy_db) {
//       res.json(dbburgeryummy_db);
//     });
//   });

// };
