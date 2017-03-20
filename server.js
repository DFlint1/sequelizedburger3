//server.js


var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// var models = require('./models');
// var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();
// Requiring our models for syncing
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes =============================================================
//link to burger controller, set as default page"/"
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

// Syncing our sequelize models and then starting our express app

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
//  });
//===========================uncomment out below

// app.get('/burgers', function(req, res){
// 	models.burgers.findAll()
//     .then(function(data){res.render('burger/burgers', {burgers: data});
// 	});
//
// var  });routes = require('./controllers/burger_controller.js');
// app.use('/', routes);
// //listen on port, if undefined, use 3000
// app.listen(process.env.PORT || 3000);
// app.post('/burger/create', function(req, res){
//     console.log(req.body);
       
//     //this code will create the new user
//     models.burgers.create({
//         burger_name: req.body.newname,
//         devoured: false,
//         date: new Date(),
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });
//     res.redirect('/burgers');
// });

// app.post('/burgers/update/devour/:id', function(req, res) {
// 	models.burgers.update({
// 		devoured: true,
// 	}, {
// 		where: {
// 			id: req.params.id
// 		}
// 	});
// 	res.redirect('/burgers');

// });
// db.sequelize.sync().then(function(){
// app.listen(PORT, function(){
//     console.log('Here is where we look on port: ' + PORT);
// });
// });
// Import routes and give the server access to them.
// var routes = require("./routes/api-routes.js")(app);

// app.use("/", routes);

// app.listen(port);
