var Sequelize = require("sequelize");

var DataContext = function(config) {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);

    var Account = sequelize.import("./models/account");
    var Course = sequelize.import("./models/course");

    return {
        Account: Account,
        Course: Course,
        sequelize: sequelize
    }
}

module.exports = DataContext;