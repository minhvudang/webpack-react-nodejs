var express = require("express");
var queryHandler = require("express-api-queryhandler");
var bodyParser = require("body-parser");
var config = require("./back-end/config/config");
var compress = require("compression");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();
app.set('view engine', 'ejs');
app.set('views',  './views');
app.use(express.static('./public'));

app.use(queryHandler.filter());
app.use(queryHandler.pagination({ limit: 100 }));
app.use(queryHandler.sort());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compress());    
app.use(cors());

app.use(cookieParser());
app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 360000
    }
}));

var MySQl_Data_Context = require("./back-end/repository/data-context");
var dataContext = new MySQl_Data_Context(config.mysql);

var AccountRepository = require("./back-end/repository/account-repository");
var CourseRepository = require("./back-end/repository/course-repository");

var accountRepository = new AccountRepository(dataContext);
var courseRepository = new CourseRepository(dataContext);

// var CourseService = require("../service/course-service");
var AuthenService = require("./back-end/service/authen-service");

// var courseService = new CourseService(courseRepository);
var authenService = new AuthenService(accountRepository);

var AuthenController = require("./back-end/api/controller/authen-controller");
var CourseController = require("./back-end/api/controller/course-controller");

var authenController = new AuthenController(authenService);
var courseController = new CourseController(courseRepository);

app.get('/', (req, res) => {
    if(!(req.session.user === null || req.session.user == undefined)) {
        res.render('course');
    } else {
        res.render('login');
    }
})

app.post("/signup",
        authenController.signup,
        function(req, res) {
            return res.status(200).send(res.result);
        }
)
    
app.get("/register/:accountId",
    authenController.register,
    function(req, res) {
        var result = res.result;
        req.session.user = {
            username: result.username,
            name: result.firstname + result.lastname,
            birthday: result.birthday,
            gender: result.gender
        }
        return res.status(200).redirect("/");
    }
)

app.post("/login",
    authenController.login,
    function(req, res) {
        result = res.result;
        req.session.user = {
            username: result.username,
            name: result.firstname + result.lastname,
            birthday: result.birthday,
            gender: result.gender
        }
        return res.status(200).send(res.result);
    }
)

app.get("/courses", 
    courseController.getCourses,
    function(req, res) {
        res.status(200).send(res.result);
})

app.get("/logout", 
    function(req, res) {
        req.session.user = null;
        return res.status(200).redirect("/");
    }
)

app.get("/session",
    function(req, res) {
        return res.status(200).send(req.session.user);
    }
)

app.use( (err, req, res, next) => {
    console.error(new Date());
    console.error(err);

    if(err.type) {
        switch(err.type) {
            case "Bad Request":
                return res.status(400).send({ error: "Bad Request" });
            case "Unauthorized":
                return res.status(401).send({ error: "Unauthorized" });
            case "Request Failed":
                return res.status(402).send({ error: "Request Failed" });
            case "Not Found":
                return res.status(404).send({ error: "Not Found" });
            case "Duplicated":
                return res.status(409).send({ error: "Duplicated" });
        }
    }

    return res.status(500).send({ error: "Something Failed" });
})

var port = config.port;
app.listen(port, () => {
    console.log("Server is listening on port:", port);
})

module.exports = app;