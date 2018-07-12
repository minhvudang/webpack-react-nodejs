var nodemailer = require("nodemailer");
var bcrypt = require("bcryptjs");

var accountRules = require("./rules");
var config = require("../config/config");
var validator = require("node-validator");

var shortid = require("short-id");
var objectAssign = require("object-assign");

var dependences = {
    accountRepository: null
}

var AuthenService = function (accountRepository) {
    dependences.accountRepository = accountRepository;
}

AuthenService.prototype.sendMailConfirm = function (account, callback) {
    try {
        validate(accountRules, account);
    } catch (err) {
        return callback({
            type: 'Bad Request',
            err: err
        });
    }

    var newAccount = objectAssign({}, {
        id: shortid.generate()
    }, account);

    bcrypt.hash(newAccount.password, config.salt, (err, hash) => {
        if (err) return callback(err);
        newAccount.password = hash;

        dependences.accountRepository.create(newAccount, (err, result) => {
            if (err) {
                return callback(err, null);
            } else {
                var transporter = nodemailer.createTransport({
                    service: config.transporter.service,
                    auth: {
                        user: config.transporter.username,
                        pass: config.transporter.password
                    }
                })

                let linkConfirm = config.host + ':' + config.port + '/register/' + newAccount.id;

                let mailOptions = {
                    from: config.transporter.username,
                    to: newAccount.username,
                    subject: 'Confirm your account',
                    html: '<p>Confirm <a href="' + linkConfirm + '">here</a></p>'
                }

                transporter.sendMail(mailOptions, (err, result) => {
                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                })
            }
        })
    })
}

AuthenService.prototype.registerAccount = function (accountId, callback) {
    dependences.accountRepository.findById(accountId, (err, result) => {
        if (err) {
            return callback(err, null);
        } else {
            if (!result) {
                return callback({
                    type: 'Not Found'
                }, null);
            }
            let isConfirm = result.isConfirm;
            if (isConfirm) {
                return callback({
                    type: 'Bad Request'
                }, null);
            } else {
                dependences.accountRepository.updateConfirm(result.id, (err, res) => {
                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                })

            }
        }
    })
}

AuthenService.prototype.login = function (username, password, callback) {
    dependences.accountRepository.findByUserName(username, (err, result) => {
        if (err) {
            return callback(err, null);
        } else {
            if (!result) {
                return callback({
                    type: "Not Found"
                }, null);
            } else {
                if (!result.isConfirm) {
                    return callback({
                        type: "Bad request"
                    })
                } else {
                    bcrypt.compare(password, result.password, (err, res) => {
                        if (err) return callback(err, null);

                        if (!res) {
                            return callback({
                                type: "Unauthorized"
                            });
                        } else {
                            return callback(null, result);
                        }

                    })
                }
            }
        }
    })
}

function validate(rules, obj) {
    validator.run(rules, obj, function (errorCount, errors) {
        if (errorCount > 0) throw errors;
    });
}

module.exports = AuthenService;