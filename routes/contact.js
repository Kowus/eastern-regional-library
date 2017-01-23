var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('contact', { title: 'Express' });
});

router.post('/sendmail', function (req, res, next) {
	var reqIn = req.body;
	res.send(reqIn);
	console.log(reqIn);
})

module.exports = router;
