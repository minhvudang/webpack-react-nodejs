var dependences = {
    authenService: null
    // tokenService: null
}

var AuthenController = function(authenService, tokenService) {
    dependences.authenService = authenService
    // dependences.tokenService = tokenService
} 

AuthenController.prototype.signup = (req, res, next) => {
    var accountObj = req.body;

    dependences.authenService.sendMailConfirm(accountObj, function(err, result){
        if(err) {
            next(err);
        } else {
            res.result = result;
            next();
        }
    })
}

AuthenController.prototype.register = (req, res, next) => {
    var encryptId = req.params.accountId;

    dependences.authenService.registerAccount(encryptId, (err, result) => {
        if(err) {
            next(err);
        } else {
            res.result = result;
            next();
        }
    })
}

AuthenController.prototype.login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    dependences.authenService.login(username, password, (err, result) => {
        if(err) {
            next(err);
        } else {
            res.result = result;
            next();
        }
    })
}

module.exports = AuthenController;
