dependences = {
    courseRepository: null
}

var CourseController = function(courseRepository) {
    dependences.courseRepository = courseRepository
} 

CourseController.prototype.getCourses = function(req, res, next) {
    var limit = req.options.limit;
    var page = req.options.offset ? req.options.offset : req.options.skip;

    dependences.courseRepository.findAll(null, page, limit, (err, result) => {
        if(err) {
            next(err);
        } else {
            res.result = result;
            next();
        }
    })
}

module.exports = CourseController;