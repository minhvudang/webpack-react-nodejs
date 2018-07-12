var dependences = {
    dataContext: null,
    Account: null
}

var AccountRepository = function (dataContext) {
    dependences.dataContext = dataContext,
        dependences.Account = dataContext.Account
}

AccountRepository.prototype.findByUserName = function (username, callback) {
    dependences.Account.findOne({
        where: {
            'username': username
        },
        raw: true
    }).then((result) => {
        callback(null, result);
    }).catch((err) => {
        callback(err, null);
    })
}

AccountRepository.prototype.findById = function (id, callback) {
    dependences.Account.findOne({
        where: {
            'id': id
        },
        raw: true
    }).then((result) => {
        callback(null, result);
    }).catch((err) => {
        callback(err, null);
    })
}


AccountRepository.prototype.findByAccount = function (username, password, callback) {
    dependences.Account.findOne({
        where: {
            'username': username,
            'password': password
        },
        raw: true
    }).then((result) => {
        callback(null, result);
    }).catch((err) => {
        callback(err, null);
    })
}

AccountRepository.prototype.create = function (accountObj, callback) {
    dependences.Account.create(accountObj)
        .then((result) => {
            callback(null, result);
        }).catch((err) => {
            callback(err, null);
        })
}

AccountRepository.prototype.updateConfirm = function (id, callback) {
    dependences.Account.update({
        isConfirm: true
    }, {
        where: {
            'id': id
        }
    }).then((result) => {
        callback(null, result);
    }).catch((err) => {
        callback(err, null);
    })
}

module.exports = AccountRepository;