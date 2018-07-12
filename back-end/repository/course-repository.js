var dependences = {
    dataContext: null,
    Course: null
}

var CourseRepository = function (dataContext) {
    dependences.dataContext = dataContext,
    dependences.Course = dataContext.Course
}

CourseRepository.prototype.findAll = function (condition, page, limit, callback) {
    dependences.Course.findAll({
        where: condition,
        limit: limit,
        offset: page * limit
    }).then((result) => {
        callback(null, result);
    }).catch((err) => {
        callback(err, null);
    })
}

CourseRepository.prototype.create = function (courseObj, callback) {
    dependences.Course.create(courseObj)
    .then((result) => {
        callback(null, result)
    }).catch((err) => {
        callback(err, null);
    })
}

module.exports = CourseRepository;