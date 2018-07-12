var validator = require('node-validator');

module.exports = validator.isAnyObject()
        .withRequired('username', validator.isString())
        .withRequired('password', validator.isString())
        .withRequired('firstname', validator.isString())
        .withRequired('lastname', validator.isString())
        .withRequired('gender', validator.isString())
        .withRequired('birthday', validator.isString())