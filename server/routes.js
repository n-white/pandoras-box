var controllers = require('./controllers');
var router = require('express').Router();

router.route('/questions')
	.get(controllers.questions.get)
	.post(controllers.questions.post);

module.exports = router;