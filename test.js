var config = require("./back-end/config/config");

var DataContext = require("./back-end/repository/data-context");

var dataContext = new DataContext(config.mysql);

dataContext.sequelize.sync().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
// var bcrypt = require("bcrypt");
// var hashing = "$2b$10$PMc3PJt.R7rBCy10RT1MZO5BndETxa8xQ/5vo6Ijge0SqmhKcx32W";

// bcrypt.hash('myPassword', 10, function(err, hash) {
//     // Store hash in database
//     console.log(hash);
//   });

//   bcrypt.compare('myPassword', hashing, function(err, res) {
//     console.log(res);
//   });